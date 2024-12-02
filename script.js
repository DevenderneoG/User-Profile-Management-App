import { createStore } from "redux";
import profileReducer from "./profileReducer";
import { addProfile, removeProfile, calculateAverageAge } from "./actions";

const profiles = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const store = createStore(profileReducer);

store.subscribe(() => {
  console.log(store.getState());
  updateAverageAge();
  renderProfiles(store.getState().profiles);
});

const renderProfiles = (profiles) => {
  const profileList = document.querySelector("#profileList");

  profileList.innerHTML = " ";

  profiles.map((profile) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${profile.id}. ${profile.name} (${profile.age} years old)`;

    profileList.appendChild(listItem);
  });
};

const updateAverageAge = () => {
  const state = store.getState();
  const averageAge = state.averageAge;

  const averageAgeElement = document.querySelector("#averageAge");

  averageAgeElement.textContent = `Average Age: ${averageAge.toFixed(2)}`;
  console.log(averageAge);
};

const addProfileForm = document.querySelector("#addProfileForm");

addProfileForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const addProfileId = parseInt(document.querySelector("#addProfileId").value);
  const addProfileName = document.querySelector("#addProfileName").value;
  const addProfileAge = parseInt(
    document.querySelector("#addProfileAge").value
  );

  store.dispatch(
    addProfile({ id: addProfileId, name: addProfileName, age: addProfileAge })
  );

  addProfileForm.reset();
  store.dispatch(calculateAverageAge());
});

const removeProfileForm = document.querySelector("#removeProfileForm");

removeProfileForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const removeProfileId = parseInt(
    document.querySelector("#removeProfileId").value
  );

  store.dispatch(removeProfile(removeProfileId));

  removeProfileForm.reset();
  store.dispatch(calculateAverageAge());
});

renderProfiles(store.getState().profiles);
updateAverageAge();
