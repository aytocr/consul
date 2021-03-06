(function() {
  "use strict";
  App.BudgetEditAssociations = {
    set_text: function(response) {
      $(".js-budget-show-administrators-list").text(response.administrators);
      $(".js-budget-show-valuators-list").text(response.valuators);
      $(".js-budget-show-trackers-list").text(response.trackers);
    },
    initialize: function() {
      $(".js-budget-list-checkbox-user").on({
        click: function() {
          var admin_count, budget, params, tracker_count, url, valuator_count;
          admin_count = $(".js-budget-list-checkbox-administrators:checkbox:checked").length;
          valuator_count = $(".js-budget-list-checkbox-valuators:checkbox:checked").length;
          tracker_count = $(".js-budget-list-checkbox-trackers:checkbox:checked").length;
          budget = $(".js-budget-id").attr("id");
          url = "/admin/budgets/" + budget + "/assigned_users_translation.json";
          params = {
            administrators: admin_count,
            valuators: valuator_count,
            trackers: tracker_count
          };
          $.get(url, params, function(response) {
            App.BudgetEditAssociations.set_text(response, "json");
          });
        }
      });
      $(".js-budget-show-users-list").on({
        click: function() {
          var div_id;
          div_id = $(this).data().toggle;
          $(".js-budget-users-list").each(function() {
            if (this.id !== div_id && !$(this).hasClass("is-hidden")) {
              $(this).addClass("is-hidden");
            }
          });
        }
      });
    }
  };
}).call(this);
