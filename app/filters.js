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
      return "govuk-tag--orange"
    } else if (e === "error") {
      return "govuk-tag--red"
    } else if (e === "sent") {
      return "govuk-tag--blue"
    } else {
      return "govuk-tag--green"
    }
  }


  //set text for status "| chargeStatusText"
  filters.chargeStatusText = function(e) {
    if (e == "CHANGES") {
      return "CHANGE <br>REQUEST"
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



  //filters.statusReview = function(e) { return e.chargeStatus === "CHARGEABLE";}

  //filters.statusReview = function(arr) { arr.filter(i => i.chargeStatus == 'CHARGEABLE')};

  return filters
}
