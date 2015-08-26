jQuery("#simulation")
  .on("click", ".s-7d2b43ce-7d15-493a-b1a0-f3eafdd948d1 .click", function(event, data) {
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
                    "target": "screens/c50b08c4-f1e4-4175-8185-92b4e811e4e9"
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
    } else if(jFirer.is("#s-Button_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7d2b43ce-7d15-493a-b1a0-f3eafdd948d1 #s-Button_5": {
                      "attributes": {
                        "background-color": "#8AD9D2",
                        "background-image": "none",
                        "box-shadow": "none",
                        "text-shadow": "none",
                        "font-size": "15.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-7d2b43ce-7d15-493a-b1a0-f3eafdd948d1 #s-Button_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-7d2b43ce-7d15-493a-b1a0-f3eafdd948d1 #s-Button_5 span": {
                      "attributes": {
                        "color": "#303030",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "15.0pt"
                      }
                    }
                  },{
                    "#s-7d2b43ce-7d15-493a-b1a0-f3eafdd948d1 #s-Button_5": {
                      "attributes-ie": {
                        "-pie-background": "#8AD9D2",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7d2b43ce-7d15-493a-b1a0-f3eafdd948d1 #s-Button_6": {
                      "attributes": {
                        "background-color": "#FAFAFA",
                        "background-image": "none",
                        "box-shadow": "none",
                        "text-shadow": "none",
                        "font-size": "15.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-7d2b43ce-7d15-493a-b1a0-f3eafdd948d1 #s-Button_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-7d2b43ce-7d15-493a-b1a0-f3eafdd948d1 #s-Button_6 span": {
                      "attributes": {
                        "color": "#BCBCBC",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "15.0pt"
                      }
                    }
                  },{
                    "#s-7d2b43ce-7d15-493a-b1a0-f3eafdd948d1 #s-Button_6": {
                      "attributes-ie": {
                        "-pie-background": "#FAFAFA",
                        "-pie-poll": "false"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "host",
                    "value": "1"
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
    } else if(jFirer.is("#s-Button_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7d2b43ce-7d15-493a-b1a0-f3eafdd948d1 #s-Button_6": {
                      "attributes": {
                        "background-color": "#8AD9D2",
                        "background-image": "none",
                        "box-shadow": "none",
                        "text-shadow": "none",
                        "font-size": "15.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-7d2b43ce-7d15-493a-b1a0-f3eafdd948d1 #s-Button_6 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-7d2b43ce-7d15-493a-b1a0-f3eafdd948d1 #s-Button_6 span": {
                      "attributes": {
                        "color": "#303030",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "15.0pt"
                      }
                    }
                  },{
                    "#s-7d2b43ce-7d15-493a-b1a0-f3eafdd948d1 #s-Button_6": {
                      "attributes-ie": {
                        "-pie-background": "#8AD9D2",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-7d2b43ce-7d15-493a-b1a0-f3eafdd948d1 #s-Button_5": {
                      "attributes": {
                        "background-color": "#FAFAFA",
                        "background-image": "none",
                        "box-shadow": "none",
                        "text-shadow": "none",
                        "font-size": "15.0pt",
                        "font-family": "Roboto-Regular,Arial"
                      }
                    }
                  },{
                    "#s-7d2b43ce-7d15-493a-b1a0-f3eafdd948d1 #s-Button_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-7d2b43ce-7d15-493a-b1a0-f3eafdd948d1 #s-Button_5 span": {
                      "attributes": {
                        "color": "#BCBCBC",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "Roboto-Regular,Arial",
                        "font-size": "15.0pt"
                      }
                    }
                  },{
                    "#s-7d2b43ce-7d15-493a-b1a0-f3eafdd948d1 #s-Button_5": {
                      "attributes-ie": {
                        "-pie-background": "#FAFAFA",
                        "-pie-poll": "false"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": "host",
                    "value": "0"
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
    } else if(jFirer.is("#s-Flat-button-light")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "host"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/862d1640-1e70-4bf2-8cf5-e1fe61952295",
                    "transition": "slideleft"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/02307f7e-77b5-49ac-a4d1-23c77c1916f1",
                    "transition": "slideleft"
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
    }
  });