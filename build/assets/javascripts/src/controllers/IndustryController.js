/**
 * Created by john on 6/28/15.
 */

/**
 *
 * @param $scope
 * @param blueEconomics - The Blue Economics API
 * @constructor
 */
function IndustryController($scope, $state, blueEconomics) {

    var self = this;

    this.ask           = ask;
    this.industry      = '';
    this.getIndustries = getIndustries;
    this.searchResults = ['test1', 'test2', 'test3'];


    /**
     * Asks a question
     */
    function ask() {
        $state.go('queryResults');
    }

    /**
     * Get a list of industries from the server matching the user's input
     * @param text
     */
    function getIndustries() {
        blueEconomics.search(self.industry || '')
            .done(function (data) {
                self.searchResults = data.industries;
                $scope.$apply();    // TODO: remove this later, it's necessary because we're using jquery deferred instead of angular promise
            });
    }
}

module.exports = IndustryController;