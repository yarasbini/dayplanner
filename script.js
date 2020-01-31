$(document).ready(function () {
    var color;
    var thisHour = moment().hours();
    console.log(thisHour)
    var hour = 9
    console.log(hour)

    // loop for colors 
    for (let index = 0; index < 9; index++) {
        console.log('hour', hour)
        if (hour < thisHour) {
            color = "grey"
        } else if (hour === thisHour) {
            color = "green"
        } else {
            color = "orange"
        }
        var form = $("<form>")
        form.attr("style", "background-color: " + color)


        var row = $("<div>")
        row.attr("class", "row")


        //colums
        var hourColumn = $("<div>")
        hourColumn.attr("class", "col-sm-2")

        //1
        var inputColumn = $("<div>")
        inputColumn.attr("class", "col-sm-8")
        var input = $('<input>')
        input.attr({
            type: 'text',
            class: 'form-control',
            placeholder: 'add event',
            id: "input-" + hour
        })

        //2
        var btnColumn = $("<div>")
        btnColumn.attr("class", "col-sm-2")
        var btn = $("<button>")
        btn.attr({
            type: 'button',
            class: 'saveBtn',
            'data-HR': hour
        })
        btn.text('save')


        btnColumn.append(btn)


        inputColumn.append(input)
        console.log('hour', hour)


        
        if (hour >= 12) {
            if (hour === 12) {
                hourColumn.text("12:00PM")
            } else {
                hourColumn.text(hour - 12 + ":00PM")
            }
        } else {
            hourColumn.text(hour + ":00AM")
        }


        //conatiner
        var container = $(".container")

        form.append(row)

        row.append(hourColumn, inputColumn, btnColumn)


        container.append(form)


        //save to local storage
        var inputValue = localStorage.getItem("hour-"  + hour)
        console.log(inputValue)
        input.attr('value', inputValue)
        hour++;
        //ok fr
    }
   $('.saveBtn').on('click', function () {
   console.log(this)

    var grab = $(this).attr('data-hr')
    console.log(grab)

    var grabIn = $('#input-' + grab).val()
    console.log(grabIn)
        localStorage.setItem('hour-' + grab, grabIn)
    })
})
var headDate = moment().format('MMMM Do YYYY, h:mm a');
$('#currentDay').text(headDate)
