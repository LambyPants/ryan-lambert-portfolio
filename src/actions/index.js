export function filteredProjects(array) {
  return {
    type: "FILTERED_ARRAY",
    payload: array
  };
}

export function selectedModal(obj) {
  return {
    type: "SELECTED_MODAL",
    payload: obj
  };
}

export function openCloseModal(bool) {
  return {
    type: "OPENCLOSE_MODAL",
    payload: bool
  };
}
