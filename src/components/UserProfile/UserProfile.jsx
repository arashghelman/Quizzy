import React from "react";
import UserInfoCard from "./UserInfoCard/UserInfoCard";
import MyQuizCard from "./MyQuizCard/MyQuizCard";
import Button from "../shared/Button";
import Modal from "../shared/Modal";
import QuizForm from "./QuizForm/QuizForm";
import List from "../shared/List";

export default function UserProfile() {
  return (
    <div className="grid gap-20">
      <div className="grid gap-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl text-blue-1000 font-medium text-left">
            User Profile
          </h1>
          <hr className="border-gray-300 w-5/6" />
        </div>
        <UserInfoCard />
      </div>
      <List
        heading="Quizzes"
        subHeading="List of quizzes created by user"
        gap="gap-10"
      >
        <Button variant="add" custom="bg-gray-50 rounded-md text-3xl" />
        <li>
          <MyQuizCard />
        </li>
        <li>
          <MyQuizCard />
        </li>
        <li>
          <MyQuizCard />
        </li>
        <li>
          <MyQuizCard />
        </li>
      </List>
      {/* <Modal title="Add quiz">
        <QuizForm />
      </Modal> */}
    </div>
  );
}
