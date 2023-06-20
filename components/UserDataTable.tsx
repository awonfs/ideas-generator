import React from "react";

function UserDataTable() {
  return (
    <>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Prompt
              </th>
              <th scope="col" className="px-6 py-3">
                Created
              </th>
              <th scope="col" className="px-6 py-3">
                Response
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Workout plan
              </th>
              <td className="px-6 py-4">20.06.2023</td>
              <td className="px-6 py-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia, voluptatem...
              </td>
            </tr>
            <tr className="border-b bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Recipe ideas for a diet
              </th>
              <td className="px-6 py-4">20.06.2023</td>
              <td className="px-6 py-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia, voluptatem...
              </td>
            </tr>
            <tr className="bg-white border-b">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                New hobbies for a programmer
              </th>
              <td className="px-6 py-4">20.06.2023</td>
              <td className="px-6 py-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia, voluptatem...
              </td>
            </tr>
            <tr className="border-b bg-gray-50">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                Book recommendations
              </th>
              <td className="px-6 py-4">20.06.2023</td>
              <td className="px-6 py-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia, voluptatem...
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                New music
              </th>
              <td className="px-6 py-4">20.06.2023</td>
              <td className="px-6 py-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Officia, voluptatem...
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default UserDataTable;
