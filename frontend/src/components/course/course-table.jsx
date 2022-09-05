import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-location";
import clsx from "clsx";
import { useState } from "react";

import UpdateCourseForm from "/src/components/course/update-course-form";

export default function CourseTable({ courses }) {
  const [isUpdateModal, setIsUpdateModal] = useState(false);
  const [selectedId, setSelectedId] = useState(0);

  const openUpdateModal = () => setIsUpdateModal(true);
  const closeUpdateModal = () => setIsUpdateModal(false);
  const editCourse = (courseId) => {
    openUpdateModal();
    setSelectedId(courseId);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table-zebra table">
          <thead>
            <tr>
              <th />
              <th>Actions</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course, index) => (
              <tr key={course._id}>
                <th>{index + 1}</th>
                <td className="space-x-2">
                  <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => editCourse(index)}
                  >
                    Edit
                  </button>
                  <Link
                    to={`/admin/courses/${course._id}/lessons`}
                    className="btn btn-ghost btn-sm"
                  >
                    Lessons
                  </Link>
                </td>
                <td>{course.title}</td>
                <td>{course.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* update modal */}
      <div>
        <div className={clsx("modal", { "modal-open": isUpdateModal })}>
          <div className="modal-box">
            {isUpdateModal && (
              <UpdateCourseForm
                course={courses[selectedId]}
                onSuccess={closeUpdateModal}
              />
            )}
            <button
              onClick={closeUpdateModal}
              className="btn btn-circle absolute top-0 right-0 m-4"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
