const recordingsCalendar = document.querySelector(".recordings__calendar");

function clearOtherRecordings(recording) {
  const active = document.querySelector(".recording--active");
  if (active && active !== recording) {
    console.log("different one is playing already");
    active.classList.remove("recording--active");
  }
}

function toggleRecording(recording) {
  clearOtherRecordings(recording);
  if (recording.classList.contains("recording--active")) {
    recording.classList.remove("recording--active");
  } else {
    recording.classList.add("recording--active");
  }
}

recordingsCalendar.addEventListener("click", function (e) {
  const recording = e.target.closest(".recording");
  if (recording) {
    console.log("a recording was pressed");

    toggleRecording(recording);
  }
});

console.log("hello play-recording", recordingsCalendar.classList);
