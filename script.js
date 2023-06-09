// Show spinner for Freelancers dropdown
const freelancersSpinner = document.getElementById("freelancers-spinner")
freelancersSpinner.style.display = "block"

// Fetch the JSON Freelancers data
fetch(
  "https://script.google.com/macros/s/AKfycby9uZjfPh6nzXwLKqv3qZx9-4pQIlkqcraPaiJMgWhPqcC8rbANpWczTschhko-X6tF/exec"
)
  .then((response) => response.json())
  .then((data) => {
    const dropdown = document.getElementById("freelancers")
    data.forEach((freelancer) => {
      const option = document.createElement("option")
      option.text = freelancer.Freelancers
      option.value = freelancer.Freelancers
      dropdown.add(option)
    })

    // Hide spinner for Freelancers dropdown
    freelancersSpinner.style.display = "none"
  })

// Show spinner for Project Code dropdown
const projectSpinner = document.getElementById("project-spinner")
projectSpinner.style.display = "block"

//Fetch the JSON Project Code data
fetch(
  "https://script.google.com/macros/s/AKfycbzDk3JyVSQ0_gXBd8EhFjoLhPgy1OlaFA2jhpuQNcWaHIJjg38O9xkbgtLwn0uaDOqU/exec"
)
  .then((response) => response.json())
  .then((data) => {
    const dropdown = document.getElementById("project-code")
    data.forEach((projects) => {
      const option = document.createElement("option")
      option.text = projects.Project_Codes
      option.value = projects.Project_Codes
      dropdown.add(option)
    })

    // Hide spinner for Project Code dropdown
    projectSpinner.style.display = "none"
  })

// Show spinner for Supervisors dropdown
const supervisorsSpinner = document.getElementById("supervisors-spinner")
supervisorsSpinner.style.display = "block"

//Fetch the JSON Project Code data
fetch(
  "https://script.google.com/macros/s/AKfycbwwAL3_T8lJpJsDTB7r3lZh9B8y5Sym53tCv6SHZ5FzqYvnNyQHk9CJBgApd-IpR4v6/exec"
)
  .then((response) => response.json())
  .then((data) => {
    const dropdown = document.getElementById("supervisors")
    data.forEach((supervisors) => {
      const option = document.createElement("option")
      option.text = supervisors.Supervisors
      option.value = supervisors.Supervisors
      dropdown.add(option)
    })

    // Hide spinner for Project Code dropdown
    supervisorsSpinner.style.display = "none"
  })

// Responsibility slider
$("#responsibility-slider").slider({
  value: 5,
  min: 0,
  max: 10,
  step: 0.5,
  slide: function (event, ui) {
    $("#responsibility-value").text(ui.value)
  },
})
$("#responsibility-value").text($("#responsibility-slider").slider("value"))

// Communication slider
$("#communication-slider").slider({
  value: 5,
  min: 0,
  max: 10,
  step: 0.5,
  slide: function (event, ui) {
    $("#communication-value").text(ui.value)
  },
})
$("#communication-value").text($("#communication-slider").slider("value"))

// Professionalism slider
$("#professionalism-slider").slider({
  value: 5,
  min: 0,
  max: 10,
  step: 0.5,
  slide: function (event, ui) {
    $("#professionalism-value").text(ui.value)
  },
})
$("#professionalism-value").text($("#professionalism-slider").slider("value"))

// Platform Knowledge slider
$("#platform-knowledge-slider").slider({
  value: 5,
  min: 0,
  max: 10,
  step: 0.5,
  slide: function (event, ui) {
    $("#platform-knowledge-value").text(ui.value)
  },
})
$("#platform-knowledge-value").text(
  $("#platform-knowledge-slider").slider("value")
)

// Critical Thinking slider
$("#critical-thinking-slider").slider({
  value: 5,
  min: 0,
  max: 10,
  step: 0.5,
  slide: function (event, ui) {
    $("#critical-thinking-value").text(ui.value)
  },
})
$("#critical-thinking-value").text(
  $("#critical-thinking-slider").slider("value")
)

// Proactiveness slider
$("#proactiveness-slider").slider({
  value: 5,
  min: 0,
  max: 10,
  step: 0.5,
  slide: function (event, ui) {
    $("#proactiveness-value").text(ui.value)
  },
})
$("#proactiveness-value").text($("#proactiveness-slider").slider("value"))

function resetValues() {
  document.getElementById("freelancers").selectedIndex = 0
  $("#responsibility-slider").slider("value", 5)
  $("#responsibility-value").text($("#responsibility-slider").slider("value"))
  $("#communication-slider").slider("value", 5)
  $("#communication-value").text($("#communication-slider").slider("value"))
  $("#professionalism-slider").slider("value", 5)
  $("#professionalism-value").text($("#professionalism-slider").slider("value"))
  $("#platform-knowledge-slider").slider("value", 5)
  $("#platform-knowledge-value").text(
    $("#platform-knowledge-slider").slider("value")
  )
  $("#critical-thinking-slider").slider("value", 5)
  $("#critical-thinking-value").text(
    $("#critical-thinking-slider").slider("value")
  )
  $("#proactiveness-slider").slider("value", 5)
  $("#proactiveness-value").text($("#proactiveness-slider").slider("value"))
  document.getElementById("normal").checked = true
  document.getElementById("feedback").value = ""
}

// Add event listener for the submit button
window.onload = function () {
  const submitSpinner = document.getElementById("submit-spinner")
  document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault() // prevent form submission if dropdowns are empty
    submitSpinner.style.display = "block"
    let freelancer = document.getElementById("freelancers").value
    let project_codes = document.getElementById("project-code").value
    let supervisors = document.getElementById("supervisors").value

    // Check if dropdowns have a selected value
    if (freelancer === "" || project_codes === "" || supervisors === "") {
      alert(
        "Please make sure you have selected both your name, Freelancer and the Project Code!"
      )
      submitSpinner.style.display = "none"
      return
    }

    let responsibility = $("#responsibility-value").text()
    let communication = $("#communication-value").text()
    let professionalism = $("#professionalism-value").text()
    let platform_knowledge = $("#platform-knowledge-value").text()
    let critical_thinking = $("#critical-thinking-value").text()
    let proactiveness = $("#proactiveness-value").text()
    let selectedDifficulty = document.querySelector(
      'input[name="difficulty"]:checked'
    ).value

    //check if feedback is a "number" in which case convert to string
    let feedback = document.getElementById("feedback").value
    const numRegex = /^\d+(\.\d+)?$/
    if (numRegex.test(feedback)) {
      if (feedback % 1 === 0) {
        feedback = parseInt(feedback)
      } else {
        feedback = parseFloat(feedback)
      }
      if (feedback != "" && typeof feedback === "number") {
        feedback = "=TO_TEXT(" + feedback + ")"
      }
    }

    const url =
      "https://script.google.com/macros/s/AKfycbwZZE5cb0qrLDLKrIlIuMN-tibX1JdeUCKyBlgHm_NixyvcUj4Zr69seh2LFj8aq30p/exec" +
      `?freelancer=${encodeURIComponent(freelancer)}` +
      `&project_codes=${encodeURIComponent(project_codes)}` +
      `&responsibility=${encodeURIComponent(responsibility)}` +
      `&communication=${encodeURIComponent(communication)}` +
      `&professionalism=${encodeURIComponent(professionalism)}` +
      `&platform_knowledge=${encodeURIComponent(platform_knowledge)}` +
      `&critical_thinking=${encodeURIComponent(critical_thinking)}` +
      `&proactiveness=${encodeURIComponent(proactiveness)}` +
      `&selectedDifficulty=${encodeURIComponent(selectedDifficulty)}` +
      `&supervisors=${encodeURIComponent(feedback)}` +
      `&feedback=${encodeURIComponent(supervisors)}`

    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Form submitted successfully:", result)
        resetValues()
        submitSpinner.style.display = "none"
        setTimeout(function () {
          alert("Your submission has been recorded!")
        }, 100) // 100ms delay
      })
      .catch((error) => {
        console.error("Form submission failed:", error)
        submitSpinner.style.display = "none"
        setTimeout(function () {
          alert(
            "ERROR! If the issues still persists, please reach out to Sankarshan Ghosh on Slack for help."
          )
        }, 100) // 100ms delay
      })
  })
}

$("#toggle-modal-responsibility").on("click", function () {
  const id = $(this).closest("div").attr("id")
  const title = $(`#${id} > .title`).text()
  const content = $(`#${id} > .content`).text()
  $("#modal-title").text(title)
  $("#modal-content").text(content)
  $("#popup-modal").addClass("show")
})

$("#close-modal").on("click", function () {
  $("#popup-modal").removeClass("show")
})

$("#toggle-modal-communication").on("click", function () {
  const id = $(this).closest("div").attr("id")
  const title = $(`#${id} > .title`).text()
  const content = $(`#${id} > .content`).text()
  $("#modal-title").text(title)
  $("#modal-content").text(content)
  $("#popup-modal").addClass("show")
})

$("#close-modal").on("click", function () {
  $("#popup-modal").removeClass("show")
})

$("#toggle-modal-professionalism").on("click", function () {
  const id = $(this).closest("div").attr("id")
  const title = $(`#${id} > .title`).text()
  const content = $(`#${id} > .content`).text()
  $("#modal-title").text(title)
  $("#modal-content").text(content)
  $("#popup-modal").addClass("show")
})

$("#close-modal").on("click", function () {
  $("#popup-modal").removeClass("show")
})

$("#toggle-modal-platform-knowledge").on("click", function () {
  const id = $(this).closest("div").attr("id")
  const title = $(`#${id} > .title`).text()
  const content = $(`#${id} > .content`).text()
  $("#modal-title").text(title)
  $("#modal-content").text(content)
  $("#popup-modal").addClass("show")
})

$("#close-modal").on("click", function () {
  $("#popup-modal").removeClass("show")
})

$("#toggle-modal-critical-thinking").on("click", function () {
  const id = $(this).closest("div").attr("id")
  const title = $(`#${id} > .title`).text()
  const content = $(`#${id} > .content`).text()
  $("#modal-title").text(title)
  $("#modal-content").text(content)
  $("#popup-modal").addClass("show")
})

$("#close-modal").on("click", function () {
  $("#popup-modal").removeClass("show")
})

$("#toggle-modal-proactiveness").on("click", function () {
  const id = $(this).closest("div").attr("id")
  const title = $(`#${id} > .title`).text()
  const content = $(`#${id} > .content`).text()
  $("#modal-title").text(title)
  $("#modal-content").text(content)
  $("#popup-modal").addClass("show")
})

$("#close-modal").on("click", function () {
  $("#popup-modal").removeClass("show")
})

function handleCloseNotification() {
  $("#notification").hide()
}
