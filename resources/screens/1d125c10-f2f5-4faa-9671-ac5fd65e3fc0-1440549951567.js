jQuery("#simulation")
  .on("click", ".s-1d125c10-f2f5-4faa-9671-ac5fd65e3fc0 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/7d2b43ce-7d15-493a-b1a0-f3eafdd948d1"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-close")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/2b068585-8261-4c0b-a690-eaf953529ae1",
                    "transition": "slideandfade"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-1d125c10-f2f5-4faa-9671-ac5fd65e3fc0 #s-Ellipse_13 .shapert-clipping": {
                      "attributes": {
                        "left": "0px",
                        "top": "0px",
                        "width": "168px",
                        "height": "172px",
                        "position": "absolute",
                        "overflow": "hidden"
                      }
                    }
                  },{
                    "#s-1d125c10-f2f5-4faa-9671-ac5fd65e3fc0 #s-Ellipse_13 .content": {
                      "attributes": {
                        "width": "168px",
                        "height": "172px"
                      }
                    }
                  },{
                    "#s-1d125c10-f2f5-4faa-9671-ac5fd65e3fc0 #s-Ellipse_13": {
                      "attributes": {
                        "opacity": "0.8"
                      }
                    }
                  },{
                    "#s-1d125c10-f2f5-4faa-9671-ac5fd65e3fc0 #s-Ellipse_13": {
                      "attributes-ie": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)",
                        "filter": "alpha(opacity=80)"
                      }
                    }
                  },{
                    "#s-1d125c10-f2f5-4faa-9671-ac5fd65e3fc0 #s-Ellipse_13": {
                      "attributes-ie8lte": {
                        "-ms-filter": "progid:DXImageTransform.Microsoft.Alpha(Opacity=80)",
                        "filter": "alpha(opacity=80)"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });