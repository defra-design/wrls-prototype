module.exports = function (env) {
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
  //filter for month implment on the page by using "| toMonth"
  filters.toMonth = function(x){
  months = ["January ", "February ", "March ", "April ", "May ", "June ", "July ", "August ", "September ", "October ", "November ", "December "];
  if (x > 0){ return months[x - 1]; // returns date as per month
  } else {
          return x ;
  }}


      //filter for removing white space from a variable "| replaceWS"
    filters.replaceWS = function(e){
      return e.replace(/\s/g,'')
     }

     //capitalise the first character of a string
     filters.firstToUpperCase = function(e) {
       return e.charAt(0).toUpperCase() + e.slice(1)
     }

     //filter for replacing commas with line breaks "| replaceComma | striptags(true) | escape | nl2br"
     //This isn't safe for production
     filters.replaceComma = function(e){
           return e.replace(/\,/g,'\n')
          }

          //filter for replacing tildes with line breaks "| replaceTilde | striptags(true) | escape | nl2br"
          //This isn't safe for production
          filters.replaceTilde = function(e){
                return e.replace(/\~/g,'\n')
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
              return "CHANGE REQUEST"
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






    //filters.statusReview = function(e) { return e.chargeStatus === "CHARGEABLE";}

  //filters.statusReview = function(arr) { arr.filter(i => i.chargeStatus == 'CHARGEABLE')};

  return filters
}
