module.exports = function(env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.



  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */
  //get today's date change any string in to today's date {{ "foo" | today }}
  filters.today = function(x) {
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;

    const yyyy = date.getFullYear();
  /*  if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    } */

    //change the month into a name
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    mm = monthNames[mm - 1]

    const today = `${dd} ${mm} ${yyyy}`;

    return x.replace(/\w+/g, today)
  }

  //get today's date change any string in to today's date in a number format {{ "foo" | todayNumber }}
  filters.todayNumber = function(x) {
    let date = new Date();
    let dd = date.getDate();
    let mm = date.getMonth() + 1;

    const yyyy = date.getFullYear();
   if (dd < 10) {
      dd = `0${dd}`;
    }
    if (mm < 10) {
      mm = `0${mm}`;
    } 

    const today = `${yyyy}${mm}${dd}`;

    return x.replace(/\w+/g, today)
  }

//add preceeding 0 |pad
filters.pad = function(x) {
 return x.padStart(2, '0')
}

//filter to change a number string in to the govuk date format. "yyyymmdd" | numberToGovukDate
filters.numberToGovukDate = function(x) {
  let dd = x.slice(-2);
  dd = parseInt(dd, 10);
  let mm = x.slice(-4, -2)
  mm = parseInt(mm, 10);
  let yyyy = x.slice(0, 4);

  //change the month into a name
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  mm = monthNames[mm - 1]

  const today = `${dd} ${mm} ${yyyy}`;

  return x.replace(/\w+/g, today)
}

//filter to change a mmdd date string in to the govuk date format. "mmdd" | mmddToDate
filters.mmddToDate = function(x) {
  let dd = x.slice(-2);
  dd = parseInt(dd, 10);
  let mm = x.slice(-4, -2)
  mm = parseInt(mm, 10);


  //change the month into a name
  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  mm = monthNames[mm - 1]

  const today = `${dd} ${mm}`;

  return x.replace(/\w+/g, today)
}


  //Sort an Object | sort(arr, reverse, caseSens, attr))
  // e.g. notifications | sort(false, false, 'sentBy')
  // sort the array of objects notifications, in asc order not case sensitive by sentBy

//filter array includes " |arrayIncludes"
filters.arrayIncludes = function(input, item) {
  if (input !== undefined){
    return input.includes(item) | input == "all"
    }
}

//filter plural, filter a field and if there is more than one return the title with an S appended, otherwise just return the title " |plura("title")"
filters.plural = function(input, title) {
  if (input !== undefined & input.length >= 2){
    return title + "s"
  } else {
    return title
  }
}

//filter focus " | focus" //can't focus a string
filters.focus = function(x) {
  return x.focus()
}


//filter to remove duplicates from an array " | unique"
 filters.unique = function(x) {
   //return x.filter((value, index) => x.indexOf(value) === index );
   return [...new Set(x)]
 }

 //filter remove the first item in an array " |shift"
 filters.shift = function(x) {
   return x.shift()
 }

  //filter for month implment on the page by using "| toMonth"
  filters.toMonth = function(x) {
    months = ["January ", "February ", "March ", "April ", "May ", "June ", "July ", "August ", "September ", "October ", "November ", "December "];
    if (x > 0) {
      return months[x - 1]; // returns date as per month
    } else {
      return x;
    }
  }


  //filter for removing white space from a variable "| replaceWS"
  filters.replaceWS = function(e) {
    return e.replace(/\s/g, '')
  }

  //capitalise the first character of a string
  filters.firstToUpperCase = function(e) {
    return e.charAt(0).toUpperCase() + e.slice(1)
  }

  //filter for replacing commas with line breaks "| replaceComma | striptags(true) | escape | nl2br"
  //This isn't safe for production
  filters.replaceComma = function(e) {
    return e.replace(/\,/g, '\n')
  }


  //filter for replacing brackets with line breaks "| stripSqBrackets "
  //This isn't safe for production
  filters.stripSqBrackets = function(e) {
    return e.replace(/\[|\]/g, "")
  }


  //filter for replacing quotes with line breaks "| stripQuotes "
  //This isn't safe for production
  filters.stripQuotes = function(e) {
    return e.replace(/\"/g, "")
  }

  //Array to string on new lines | dump | stripQuotes | stripSqBrackets | replaceComma | striptags(true) | escape | nl2br


  //filter for replacing tildes with line breaks "| replaceTilde | striptags(true) | escape | nl2br"
  //This isn't safe for production
  filters.replaceTilde = function(e) {
    return e.replace(/\~/g, '\n')
  }

  //filter for removing nulls "|removeNull"
  //This isn't safe for production
  filters.removeNull = function(e) {
    return e.replace(/null/g, '')
  }


  //set colours for status "| statusColour"
  filters.statusColour = function(e) {
    if (e === "building") {
      return "govuk-tag--grey"
    } else if (e === "error") {
      return "govuk-tag--red"
    } else if (e === "sent" | e === " sent" | e === " sent ") {
      return "govuk-tag--green"
    } else {
      return "govuk-tag--blue"
    }
  }


  //set text for status "| chargeStatusText"
  filters.chargeStatusText = function(e) {
    if (e == "CHANGES") {
      return "CHANGE<br>REQUEST"
    } else if (e == "INVALID") {
      return "INVALID"
    } else if (e == "NOT APPROVED") {
      return "REVIEW"
    } else {
      return "ACTIVE"
    }
  }

  //set colours for status "| chargeStatusColour"
  filters.chargeStatusColour = function(e) {
    if (e == "NOT APPROVED") {
      return "govuk-tag--orange"
    } else if (e == "INVALID") {
      return "govuk-tag--red"
    } else if (e == "CHANGES") {
      return "govuk-tag--blue"
    } else {
      return "govuk-tag--green"
    }
  }

  //set text for status "| tagStatusText"
  filters.tagStatusText = function(e) {
    if (e == "warning") {
      return "warning"
    } else if (e == "reduce") {
      return "reduce"
    } else if (e == "stop") {
      return "stop"
    } else {
      return "No&nbsp;restrictions"
    }
  }

  //set colours for status "| tagStatusColour"
  filters.tagStatusColour = function(e) {
    if (e == "warning") {
      return "govuk-tag--yellow"
    } else if (e == "reduce") {
      return "govuk-tag--orange"
    } else if (e == "stop") {
      return "govuk-tag--red"
    } else {
      return "govuk-tag--green"
    }
  }

  //set colours for status "| tagStatusColour"
  filters.tagColour = function(e) {
    if (e == "ready") {
      return "govuk-tag--blue"
    } else if (e == "review") {
      return "govuk-tag--orange"
    } else if (e == "error") {
      return "govuk-tag--red"
    } else {
      return "govuk-tag--green"
    }
  }

  //set units "| units"
  filters.units = function(e) {
    if (e == "cubicMetresPerSecond") {
      return "m<sup>3</sup>/s"
    } else if (e == "cubicMetresPerDay") {
      return "m<sup>3</sup>/d"
    } else if (e == "litrespersecond") {
      return "l/s"
    } else if (e == "metresAboveOrdinanceDatum") {
      return "mAOD"
    } else if (e == "metresAboveStationDatum") {
      return "mASD"
    } else if (e == "metres") {
      return "m"
    } else {
      return "Ml/d"
    }
  }

  //set unitsWords "| unitsWords"
  filters.unitsWords = function(e) {
    if (e == "cubicMetresPerSecond") {
      return "metres cubed per second"
    } else if (e == "cubicMetresPerDay") {
      return "metres cubed per day"
    } else if (e == "litrespersecond") {
      return "litres per second"
    } else if (e == "metresAboveOrdinanceDatum") {
      return "metres above ordnance datum"
    } else if (e == "metresAboveStationDatum") {
      return "metres above station datum"
    } else if (e == "metres") {
      return "metres"
    } else {
      return "megalitres per day"
    }
  }



  //show only results for a certain customer "| customer"
  filters.customer = function(e) {
    if (e == "Bottled Water Plc")
      $(this).hide();
  }

  //push items in to an array to be used in a nunjucks macro "| push"
  /* e.g {% set selectItems = [] %}
{% for item in selectData %}
  {% set selectItems = selectItems | push({
    value: item.value,
    text: item.text
  }) %}
{% endfor %}
{{ govukSelect({
  id: "sort",
  name: "sort",
  label: {
    text: "Sort by"
  },
  items: items
}) }}*/
  filters.push = (array, item) => {
    array.push(item)
    return array
  }


  //currency filter | toGBP
  filters.toGBP = input => {
   function numberWithCommas(x) {
     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
   }
   if (input) return `£${numberWithCommas(input)}`
   else return ''
 }

 //filter to change a number string in to the govuk date format. "yyyymmdd" | formatDate
   filters.formatDate = function(x) {
     let dd = x.slice(-2);
     dd = parseInt(dd, 10);
     let mm = x.slice(-4, -2)
     mm = parseInt(mm, 10);
     let yyyy = x.slice(0, 4);

     //change the month into a name
     let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
     mm = monthNames[mm - 1]

     const today = `${dd} ${mm} ${yyyy}`;

     return x.replace(/\w+/g, today)
   }

//filter object by value param1 = key param2 = variable | countObject("param1","param2")

   filters.countObject = function (x,param1,param2){

    return  x.filter (item => item[param1] === param2).length

   }



  //filters.statusReview = function(e) { return e.chargeStatus === "CHARGEABLE";}

  //filters.statusReview = function(arr) { arr.filter(i => i.chargeStatus == 'CHARGEABLE')};

  return filters
}
