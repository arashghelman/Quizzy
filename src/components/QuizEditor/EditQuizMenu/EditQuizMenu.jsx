import { React, useState } from "react";
import { quizSubjects } from "../fakeData";
import TextField from "../../shared/TextField/TextField";
import ToggleSwitch from "./ToggleSwitch";
import QuizSubjectsList from "../../shared/QuizSubjectsList";
import MenuPage from "./MenuPage";
import MenuItem from "./MenuItem";
import SecondaryMenuItem from "./SecondaryMenuItem";
import SubjectsSelection from "./SubjectsSelection";
import GradesSelection from "./GradesSelection";
import Button from "../../shared/Button";
import QuizGrades from "../../shared/QuizGrades";

export default function EditQuizMenu({ data, onClickClose }) {
  const { name, isPublic, subjects, grade, description, thumbnail } = data;

  const [menuPage, setMenuPage] = useState({ title: "", content: null });

  const handleMenuItemClick = (id) => {
    switch (id) {
      case "subjects":
        setMenuPage({
          title: "Subjects",
          content: <SubjectsSelection data={quizSubjects} />,
        });
        break;

      case "grades":
        setMenuPage({ title: "Grades", content: <GradesSelection /> });
        break;

      case "delete":
        setMenuPage({ title: "Delete Quiz", content: <div></div> });
        break;

      default:
        break;
    }
  };

  const handleClickBackButton = () => {
    setMenuPage({ title: "", content: null });
  };

  return (
    <form
      className={`relative w-full h-full transform ${
        menuPage.content ? "-translate-x-full" : "-translate-x-0"
      } transition duration-100`}
      autoComplete="off"
    >
      <MenuPage
        title="Edit"
        button={
          <Button
            type="button"
            icon="ri-close-line"
            variant="secondary"
            onClick={onClickClose}
          />
        }
      >
        <div className="relative filter hover:brightness-50 cursor-pointer">
          <img src={thumbnail} alt="thumnbail" />
        </div>
        <div className="flex flex-col gap-y-7 pt-9">
          <div className="flex flex-col gap-y-8 mx-6">
            <TextField id="name" label="Quiz name" value={name} />
            <TextField
              id="description"
              label="Description"
              value={description}
            />
          </div>
          <ul>
            <MenuItem id="visibility">
              <span>Visibility</span>
              <div className="flex items-center gap-x-5">
                <span className="text-sm text-gray-400">
                  {isPublic ? "Public" : "Private"}
                </span>
                <ToggleSwitch id="visibility" />
              </div>
            </MenuItem>
            <SecondaryMenuItem id="subjects" onClick={handleMenuItemClick}>
              <span>Subjects</span>
              <QuizSubjectsList
                data={subjects}
                custom="flex text-sm text-gray-400"
              />
            </SecondaryMenuItem>
            <SecondaryMenuItem id="grades" onClick={handleMenuItemClick}>
              <span>Grades</span>
              <QuizGrades data={grade} custom="text-gray-400" />
            </SecondaryMenuItem>
            <hr />
            <MenuItem id="delete" onClick={handleMenuItemClick}>
              <span className="text-red-600">Delete Quiz</span>
            </MenuItem>
          </ul>
        </div>
      </MenuPage>
      <MenuPage
        title={menuPage.title}
        button={
          <Button
            type="button"
            icon="ri-arrow-left-line"
            variant="secondary"
            onClick={handleClickBackButton}
          />
        }
        rightSide
      >
        {menuPage.content}
      </MenuPage>
    </form>
  );
}
