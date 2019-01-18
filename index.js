let root = document.querySelector('#root');

let title = document.createElement('div');
let titleName = document.createElement('div');
let titleIcon = document.createElement('i');
let calBody = document.createElement('div');
let periodDate = document.createElement('div');
let periodTitle = document.createElement('div');
let moreIcon = document.createElement('i');
let checkboxWrapper = document.createElement('div');
let timezone = document.createElement('div');
let timeZoneTitle = document.createElement('div');
let titmezoneMoreIcon = document.createElement('i');
let timezoneWrapper = document.createElement('div');
let blockFromTo = document.createElement('div');
let caseFrom = document.createElement('div');
let caseTo = document.createElement('div');
let titleFrom = document.createElement('span');
let titleTo = document.createElement('span');
let dateFrom = document.createElement('div');
let dateTo = document.createElement('div');
let dateFromTitle = document.createElement('div');
let dateToTitle = document.createElement('div');
let dateFromIcon = document.createElement('i');
let dateToIcon = document.createElement('i');
let dateFromSelection = document.createElement('div');
let dateToSelection = document.createElement('div');
let buttonsBlock = document.createElement('div');
let buttonCancel = document.createElement('button');
let buttonApply = document.createElement('button');


let isPeriodOpen = false;
let isTimezoneOpen = false;
let isSelectionFromOpen = false;
let isSelectionToOpen = false;
let periodArr = ['Custom', 'Today', 'Yesterday', 'Last 7 days', 'Last 30 days', 'Last 90 days'];


moreIcon.addEventListener('click', showPeriod);
titmezoneMoreIcon.addEventListener('click', showTimezone);
dateFromIcon.addEventListener('click', showFromSelection);
dateToIcon.addEventListener('click', showToSelection);

title.classList.add('calendar__title');
titleName.classList.add('title__name');
titleIcon.className = "title__icon fas fa-calendar-alt";
calBody.classList.add('calendar__body');
periodDate.classList.add('period__date');
periodTitle.classList.add('title__name');
moreIcon.className = "title__icon fas fa-chevron-down";
checkboxWrapper.className = "period__checkbox checkbox--hidden";
timezone.classList.add('timezone__title');
timeZoneTitle.classList.add('title__name');
titmezoneMoreIcon.className = "title__icon fas fa-chevron-down";
timezoneWrapper.className = "timezone__selection timezone--hidden";
blockFromTo.classList.add('datechoose__block');
caseFrom.classList.add('casedate__block');
caseTo.classList.add('casedate__block');
dateFrom.classList.add('date__block');
dateTo.classList.add('date__block');
dateFromTitle.classList.add('title__name');
dateToTitle.classList.add('title__name');
dateFromIcon.className = "title__icon fas fa-calendar-alt";
dateToIcon.className = "title__icon fas fa-calendar-alt";
dateFromSelection.className = "selection--hidden";
dateToSelection.className = "selection--hidden";
buttonsBlock.classList.add('buttons_block');
buttonCancel.classList.add('button');
buttonApply.classList.add('button');


titleName.textContent = "Date";
periodTitle.textContent = "Period";
timeZoneTitle.textContent = "Timezone";
titleFrom.textContent = "From";
titleTo.textContent = "To";
dateFromTitle.textContent = "DateFrom";
dateToTitle.textContent = "DateTo";
buttonCancel.textContent = "Cancel";
buttonApply.textContent = "Apply";


root.append(title);
title.append(titleName);
title.append(titleIcon);
root.append(calBody);
calBody.append(periodDate);
periodDate.append(periodTitle);
periodDate.append(moreIcon);
calBody.append(checkboxWrapper);
calBody.append(timezone);
timezone.append(timeZoneTitle);
timezone.append(titmezoneMoreIcon);
calBody.append(timezoneWrapper);
calBody.append(blockFromTo);
blockFromTo.append(caseFrom);
blockFromTo.append(caseTo);
caseFrom.append(titleFrom);
caseTo.append(titleTo);
caseFrom.append(dateFrom);
caseTo.append(dateTo);
dateFrom.append(dateFromTitle);
dateTo.append(dateToTitle);
dateFrom.append(dateFromIcon);
dateTo.append(dateToIcon);
calBody.append(dateFromSelection);
calBody.append(dateToSelection);
calBody.append(buttonsBlock);
buttonsBlock.append(buttonCancel);
buttonsBlock.append(buttonApply);


function showPeriod() {
    isPeriodOpen = !isPeriodOpen;
    checkboxWrapper.className = isPeriodOpen ? "period__checkbox checkbox--showed" : "checkbox--hidden";
    dateToSelection.className = "selection--hidden";
    dateFromSelection.className = "selection--hidden";
    timezoneWrapper.className = "timezone--hidden";
    isTimezoneOpen = false;
    isSelectionFromOpen = false;
    isSelectionToOpen = false;
};

function showTimezone() {
    isTimezoneOpen = !isTimezoneOpen;
    timezoneWrapper.className = isTimezoneOpen ? "timezone__selection timezone--showed" : "timezone--hidden";
    dateToSelection.className = "selection--hidden";
    dateFromSelection.className = "selection--hidden";
    checkboxWrapper.className = "checkbox--hidden";
    isPeriodOpen = false;
    isSelectionFromOpen = false;
    isSelectionToOpen = false;
};

function showFromSelection() {
    isSelectionFromOpen = !isSelectionFromOpen;
    dateFromSelection.className = isSelectionFromOpen ? "dateFrom__selection selection--showed" : "selection--hidden";
    checkboxWrapper.className = "checkbox--hidden";
    timezoneWrapper.className = "timezone--hidden";
    dateToSelection.className = "selection--hidden";
    isPeriodOpen = false;
    isTimezoneOpen = false;
    isSelectionToOpen = false;
}

function showToSelection() {
    isSelectionToOpen = !isSelectionToOpen;
    dateToSelection.className = isSelectionToOpen ? "dateTo__selection selection--showed" : "selection--hidden";
    checkboxWrapper.className = "checkbox--hidden";
    timezoneWrapper.className = "timezone--hidden";
    dateFromSelection.className = "selection--hidden";
    isPeriodOpen = false;
    isTimezoneOpen = false;
    isSelectionFromOpen = false;
}

for(let i of periodArr){
    let checkItem = document.createElement('div');
    let inputItem = document.createElement('input');
    let labelItem = document.createElement('label');
    checkboxWrapper.append(checkItem);
    checkItem.append(labelItem);
    checkItem.append(inputItem);
    labelItem.classList.add('label__text');
    checkItem.classList.add('checkbox__item');
    inputItem.setAttribute('type', 'checkbox');
    inputItem.setAttribute('value', i);
    labelItem.setAttribute('for', i);
    labelItem.textContent = i;
}