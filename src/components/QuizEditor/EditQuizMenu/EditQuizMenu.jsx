import { React, useState } from "react";
import TextField from "../../shared/TextField/TextField";
import ToggleSwitch from "./ToggleSwitch";
import QuizSubjects from "../../shared/QuizSubjects";
import MenuPage from "./MenuPage";
import MenuItem from "./MenuItem";
import SecondaryMenuItem from "./SecondaryMenuItem";
import SubjectsSelection from "./SubjectsSelection";
import GradesSelection from "./GradesSelection";
import Button from "../../shared/Button";
import QuizGrades from "../../shared/QuizGrades";

export default function EditQuizMenu({ data, onClickClose }) {
  const { minGrade, maxGrade, thumbnailUrl } = data;

  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);
  const [isPublic, setIsPublic] = useState(data.isPublic);
  const [subjects, setSubjects] = useState(data.subjects);

  const handleNameChange = (event) => setName(event.target.value);
  const handleDescriptionChange = (event) => setDescription(event.target.value);
  const handleIsPublicChange = () => setIsPublic((current) => !current);

  const [menuPage, setMenuPage] = useState({ title: "", content: null });

  const handleMenuItemClick = (id) => {
    switch (id) {
      case "subjects":
        setMenuPage({
          title: "Subjects",
          content: <SubjectsSelection />,
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
        <div className="flex cursor-pointer">
          <img src={thumbnailUrl} alt="thumnbail" />
          <div className="brightness-50 h-full w-full"></div>
        </div>
        <div className="flex flex-col gap-y-7 pt-9">
          <div className="flex flex-col gap-y-8 mx-6">
            <TextField
              id="name"
              label="Quiz name"
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              id="description"
              label="Description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
          <ul>
            <MenuItem id="visibility">
              <span>Visibility</span>
              <div className="flex items-center gap-x-5">
                <span className="text-sm text-gray-400">
                  {isPublic ? "Public" : "Private"}
                </span>
                <ToggleSwitch
                  id="visibility"
                  active={isPublic}
                  onToggle={handleIsPublicChange}
                />
              </div>
            </MenuItem>
            <SecondaryMenuItem id="subjects" onClick={handleMenuItemClick}>
              <span>Subjects</span>
              <QuizSubjects
                data={subjects}
                custom="flex text-sm text-gray-400"
              />
            </SecondaryMenuItem>
            <SecondaryMenuItem id="grades" onClick={handleMenuItemClick}>
              <span>Grades</span>
              <QuizGrades
                min={minGrade}
                max={maxGrade}
                custom="text-sm text-gray-400"
              />
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
