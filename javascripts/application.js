var submit_handler = function(element, id, value) {
    $('#info').html("Edited id '" + id + "' value '" + value + "'");
    return true;
};

var cancel_handler = function(element) {
    // Nothing
    return true;
};

// Enable in-place-edit
$(document).ready(function(){

  // Two examples of custom in-place edit forms
  var custom_form_1 = ' \
      <div class="in-place-edit"> \
        <textarea type="text" class="field"></textarea> \
        <div class="buttons"> \
          <input type="button" value="Save" class="save-button" /> \
          <input type="button" value="Cancel" class="cancel-button" /> \
        </div> \
      </div>';
      
  var custom_form_2 = ' \
      <div class="in-place-edit"> \
        <select class="field"> \
          <option>Feed the horse</option> \
          <option>Feed the dog</option> \
          <option>Feed the cat</option> \
        </select> \
        <div class="buttons"> \
          <input type="button" value="Save" class="save-button" /> \
          <input type="button" value="Cancel" class="cancel-button" /> \
        </div> \
      </div>';

  // Example how how to use DOM elements as templates
  var custom_form_3 = $('#form-template');
      
  // paragraph, list examples
  $(".in-place-edit").children().inPlaceEdit({
    submit : submit_handler,
    cancel : cancel_handler
  });

  // textarea example
  $(".custom-in-place-edit.textarea").children().inPlaceEdit({
    submit : submit_handler,
    cancel : cancel_handler,
    html   : custom_form_1
  });

  // select field example
  $(".custom-in-place-edit.select").children().inPlaceEdit({
    submit : submit_handler,
    cancel : cancel_handler,
    html   : custom_form_2
  });
  
  // form template example
  $("#custom-template").inPlaceEdit({
    submit : submit_handler,
    cancel : cancel_handler,
    html   : custom_form_3
  });
});