angular.module('harshTaskMaster')
.directive('alarmNotifier', ['webNotification', function(webNotification) {
  return {
    restrict: "A",
    require: "^taskList",
    scope: {
      task: "="
    },
    templateUrl: 'templates/directives/alarm-notifier.html',
    link: function (scope, element) {
        //element.on('click', function onClick() {
            webNotification.showNotification('Example Notification', {
                body: 'Notification Text...',
                icon: 'my-icon.ico',
                onClick: function onNotificationClicked() {
                    console.log('Notification clicked.');
                },
                autoClose: 4000 //auto close the notification after 4 seconds (you can manually close it via hide function)
            }, function onShow(error, hide) {
                if (error) {
                    window.alert('Unable to show notification: ' + error.message);
                } else {
                    console.log('Notification Shown.');

                    setTimeout(function hideNotification() {
                        console.log('Hiding notification....');
                        hide(); //manually close the notification (you can skip this if you use the autoClose option)
                    }, 5000);
                }
            });
        //});
    }
  };
}]);