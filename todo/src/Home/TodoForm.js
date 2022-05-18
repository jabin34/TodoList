import React from "react";
import { toast } from "react-toastify";
const TodoForm = ({ refetch }) => {
  const addTask = (e) => {
    e.preventDefault();
    const taskName = e.target.name.value;
    const description = e.target.description.value;
    console.log(taskName, description);
    const taskData = {
      taskName: taskName,
      description: description,
      flag: false,
    };
    fetch("https://boiling-temple-15527.herokuapp.com/addtask", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success(`Task added!!`);
          e.target.reset();
          refetch();
        } else {
          toast.error(`Failed to add!!`);
        }
      });
  };

  return (
    <div className="pt-5 mt-8">
      <div class="card md:w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">Add Your Task here</h2>
          <div>
            <form onSubmit={addTask}>
              <div class="form-control w-full max-w-xs">
                <label class="label">
                  <span class="label-text">Task Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="your task name..."
                  class="input input-bordered w-full max-w-xs"
                  required
                />
              </div>
              <label class="label">
                <span class="label-text mt-4">Description</span>
              </label>
              <textarea
                name="description"
                type="text"
                class="textarea textarea-bordered w-full max-w-xs "
                placeholder="description...."
                required
              ></textarea>
              <div class="card-actions justify-center mt-4">
                <input class="btn btn-md " type="submit" value="Add Task" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
