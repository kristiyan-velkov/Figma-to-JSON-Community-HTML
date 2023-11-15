module.exports = {
  "theme": {
    "extend": {
      "colors": {
        "Primary": {
          "100": "#003EB3",
          "300": "#0074F0",
          "500": "#14A9FF",
          "700": "#85DCFF"
        },
        "white": {
          "purewhite100": "rgba(255, 255, 255, 1)",
          "sandgray25": "rgba(249, 248, 245, 1)"
        },
        "springgreen": {
          "100": "rgba(179, 200, 0, 1)"
        },
        "Danger": {
          "300": "#A22020",
          "500": "#BF2626",
          "700": "#E14747"
        },
        "minor_forrestgreen": {
          "100": "rgba(44, 87, 40, 1)"
        },
        "Gray": {
          "500": "#595959",
          "700": "#999999",
          "900": "#D9D9D9",
          "White": "#FFFFFF",
          "Black": "#000000"
        },
        "minor_oceanblue": {
          "25": "rgba(197, 209, 211, 1)",
          "50": "rgba(138, 164, 167, 1)",
          "100": "rgba(22, 73, 81, 1)"
        },
        "black": {
          "coal100": "rgba(51, 47, 45, 1)",
          "charcoal100": "rgba(79, 73, 69, 1)"
        },
        "Success": {
          "300": "#199033",
          "500": "#32A94C",
          "700": "#4CC366"
        },
        "foreground": "#000000",
        "background": "#FFFFFF"
      },
      "spacing": {
        "HalfUnit": "8px",
        "TwoUnits": "32px",
        "Unit": "16px",
        "FourUnits": "64px",
        "FiveUnits": "80px",
        "OneAndHalfUnits": "24px",
        "SixUnits": "96px",
        "ThreeUnits": "48px"
      },
      "borderRadius": {
        "Radius8": "8px",
        "Round": "50%",
        "Radius2": "2px",
        "Radius4": "4px"
      },
      "scale": {
        "XLarge": "192px",
        "XSmall": "16px",
        "MaxWidth": "1400px",
        "Large": "144px",
        "Small": "48px",
        "XXLarge": "288px",
        "Medium": "96px"
      }
    }
  },
  "plugins": [],
  "content": [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./*.html"
  ]
}