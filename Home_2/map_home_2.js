		/*** ---------------------------------------
		 * World map created using amCharts 4.
		 * Documentation is available at:
		 * https://www.amcharts.com/docs/v4/
		 * ---------------------------------------
		 */
		//Animated
am4internal_webpackJsonp(["ab45"],{lhmh:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("aCit"),a=function(t){Object(n.b)(t,"SpriteState")&&(t.transitionDuration=400),Object(n.b)(t,"Component")&&(t.rangeChangeDuration=500,t.interpolationDuration=500,t.sequencedInterpolation=!1,Object(n.b)(t,"SankeyDiagram")&&(t.sequencedInterpolation=!0),Object(n.b)(t,"FunnelSeries")&&(t.sequencedInterpolation=!0)),Object(n.b)(t,"Chart")&&(t.defaultState.transitionDuration=2e3,t.hiddenState.transitionDuration=1e3),Object(n.b)(t,"Tooltip")&&(t.animationDuration=400,t.defaultState.transitionDuration=400,t.hiddenState.transitionDuration=400),Object(n.b)(t,"Scrollbar")&&(t.animationDuration=500),Object(n.b)(t,"Series")&&(t.defaultState.transitionDuration=1e3,t.hiddenState.transitionDuration=700,t.hiddenState.properties.opacity=1,t.showOnInit=!0),Object(n.b)(t,"MapSeries")&&(t.hiddenState.properties.opacity=0),Object(n.b)(t,"PercentSeries")&&(t.hiddenState.properties.opacity=0),Object(n.b)(t,"FunnelSlice")&&(t.defaultState.transitionDuration=800,t.hiddenState.transitionDuration=1e3,t.hiddenState.properties.opacity=1),Object(n.b)(t,"Slice")&&(t.defaultState.transitionDuration=700,t.hiddenState.transitionDuration=1e3,t.hiddenState.properties.opacity=1),Object(n.b)(t,"Preloader")&&(t.hiddenState.transitionDuration=2e3),Object(n.b)(t,"Column")&&(t.defaultState.transitionDuration=700,t.hiddenState.transitionDuration=1e3,t.hiddenState.properties.opacity=1),Object(n.b)(t,"Column3D")&&(t.hiddenState.properties.opacity=0)};window.am4themes_animated=a}},["lhmh"]);
		//Animated	
		//Dark
am4internal_webpackJsonp(["356d"],{"J7F+":function(t,e,c){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var b=c("aCit"),r=c("8ZqG"),o=function(t){Object(b.b)(t,"InterfaceColorSet")&&(t.setFor("stroke",Object(r.c)("#000000")),t.setFor("fill",Object(r.c)("#2b2b2b")),t.setFor("primaryButton",Object(r.c)("#6794dc").lighten(-.2)),t.setFor("primaryButtonHover",Object(r.c)("#6771dc").lighten(-.2)),t.setFor("primaryButtonDown",Object(r.c)("#68dc75").lighten(-.2)),t.setFor("primaryButtonActive",Object(r.c)("#68dc75").lighten(-.2)),t.setFor("primaryButtonText",Object(r.c)("#FFFFFF")),t.setFor("primaryButtonStroke",Object(r.c)("#6794dc")),t.setFor("secondaryButton",Object(r.c)("#3b3b3b")),t.setFor("secondaryButtonHover",Object(r.c)("#3b3b3b").lighten(.1)),t.setFor("secondaryButtonDown",Object(r.c)("#3b3b3b").lighten(.15)),t.setFor("secondaryButtonActive",Object(r.c)("#3b3b3b").lighten(.15)),t.setFor("secondaryButtonText",Object(r.c)("#bbbbbb")),t.setFor("secondaryButtonStroke",Object(r.c)("#3b3b3b").lighten(-.2)),t.setFor("grid",Object(r.c)("#bbbbbb")),t.setFor("background",Object(r.c)("#000000")),t.setFor("alternativeBackground",Object(r.c)("#ffffff")),t.setFor("text",Object(r.c)("#ffffff")),t.setFor("alternativeText",Object(r.c)("#000000")),t.setFor("disabledBackground",Object(r.c)("#bbbbbb"))),Object(b.b)(t,"Scrollbar")&&(t.background.fillOpacity=.4,t.thumb.background.fillOpacity=.5)};window.am4themes_dark=o}},["J7F+"]);
		//Dark
		//Material
am4internal_webpackJsonp(["8593"],{d66p:function(c,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var b=e("aCit"),o=e("8ZqG"),n=function(c){Object(b.b)(c,"ColorSet")&&(c.list=[Object(o.c)("#F44336"),Object(o.c)("#E91E63"),Object(o.c)("#9C27B0"),Object(o.c)("#673AB7"),Object(o.c)("#3F51B5"),Object(o.c)("#2196F3"),Object(o.c)("#03A9F4"),Object(o.c)("#00BCD4"),Object(o.c)("#009688"),Object(o.c)("#4CAF50"),Object(o.c)("#8BC34A"),Object(o.c)("#CDDC39"),Object(o.c)("#FFEB3B"),Object(o.c)("#FFC107"),Object(o.c)("#FF9800"),Object(o.c)("#FF5722"),Object(o.c)("#795548"),Object(o.c)("#9E9E9E"),Object(o.c)("#607D8B")],c.minLightness=.2,c.maxLightness=.7,c.reuse=!0),Object(b.b)(c,"ResizeButton")&&(c.background.cornerRadiusTopLeft=20,c.background.cornerRadiusTopRight=20,c.background.cornerRadiusBottomLeft=20,c.background.cornerRadiusBottomRight=20),Object(b.b)(c,"Tooltip")&&(c.animationDuration=800)};window.am4themes_material=n}},["d66p"]);
		//Material
		// Themes begin
		
		am4core.useTheme(am4themes_dark);
		am4core.useTheme(am4themes_material);
		am4core.useTheme(am4themes_animated);
		// Themes end
		// Create map instance
		var chart = am4core.create("chartdiv", am4maps.MapChart);

		var title = chart.titles.create();
		title.text = "[bold font-size: 20][/]\n";
		title.textAlign = "middle";

		var latlong = {
			"AD": {
				"latitude": 42.5,
				"longitude": 1.5
			},
			"AE": {
				"latitude": 24,
				"longitude": 54
			},
			"AF": {
				"latitude": 33,
				"longitude": 65
			},
			"AG": {
				"latitude": 17.05,
				"longitude": -61.8
			},
			"AI": {
				"latitude": 18.25,
				"longitude": -63.1667
			},
			"AL": {
				"latitude": 41,
				"longitude": 20
			},
			"AM": {
				"latitude": 40,
				"longitude": 45
			},
			"AN": {
				"latitude": 12.25,
				"longitude": -68.75
			},
			"AO": {
				"latitude": -12.5,
				"longitude": 18.5
			},
			"AP": {
				"latitude": 35,
				"longitude": 105
			},
			"AQ": {
				"latitude": -90,
				"longitude": 0
			},
			"AR": {
				"latitude": -34,
				"longitude": -64
			},
			"AS": {
				"latitude": -14.3333,
				"longitude": -170
			},
			"AT": {
				"latitude": 47.3333,
				"longitude": 13.3333
			},
			"AU": {
				"latitude": -27,
				"longitude": 133
			},
			"AW": {
				"latitude": 12.5,
				"longitude": -69.9667
			},
			"AZ": {
				"latitude": 40.5,
				"longitude": 47.5
			},
			"BA": {
				"latitude": 44,
				"longitude": 18
			},
			"BB": {
				"latitude": 13.1667,
				"longitude": -59.5333
			},
			"BD": {
				"latitude": 24,
				"longitude": 90
			},
			"BE": {
				"latitude": 50.8333,
				"longitude": 4
			},
			"BF": {
				"latitude": 13,
				"longitude": -2
			},
			"BG": {
				"latitude": 43,
				"longitude": 25
			},
			"BH": {
				"latitude": 26,
				"longitude": 50.55
			},
			"BI": {
				"latitude": -3.5,
				"longitude": 30
			},
			"BJ": {
				"latitude": 9.5,
				"longitude": 2.25
			},
			"BM": {
				"latitude": 32.3333,
				"longitude": -64.75
			},
			"BN": {
				"latitude": 4.5,
				"longitude": 114.6667
			},
			"BO": {
				"latitude": -17,
				"longitude": -65
			},
			"BR": {
				"latitude": -10,
				"longitude": -55
			},
			"BS": {
				"latitude": 24.25,
				"longitude": -76
			},
			"BT": {
				"latitude": 27.5,
				"longitude": 90.5
			},
			"BV": {
				"latitude": -54.4333,
				"longitude": 3.4
			},
			"BW": {
				"latitude": -22,
				"longitude": 24
			},
			"BY": {
				"latitude": 53,
				"longitude": 28
			},
			"BZ": {
				"latitude": 17.25,
				"longitude": -88.75
			},
			"CA": {
				"latitude": 54,
				"longitude": -100
			},
			"CC": {
				"latitude": -12.5,
				"longitude": 96.8333
			},
			"CD": {
				"latitude": 0,
				"longitude": 25
			},
			"CF": {
				"latitude": 7,
				"longitude": 21
			},
			"CG": {
				"latitude": -1,
				"longitude": 15
			},
			"CH": {
				"latitude": 47,
				"longitude": 8
			},
			"CI": {
				"latitude": 8,
				"longitude": -5
			},
			"CK": {
				"latitude": -21.2333,
				"longitude": -159.7667
			},
			"CL": {
				"latitude": -30,
				"longitude": -71
			},
			"CM": {
				"latitude": 6,
				"longitude": 12
			},
			"CN": {
				"latitude": 35,
				"longitude": 105
			},
			"CO": {
				"latitude": 4,
				"longitude": -72
			},
			"CR": {
				"latitude": 10,
				"longitude": -84
			},
			"CU": {
				"latitude": 21.5,
				"longitude": -80
			},
			"CV": {
				"latitude": 16,
				"longitude": -24
			},
			"CX": {
				"latitude": -10.5,
				"longitude": 105.6667
			},
			"CY": {
				"latitude": 35,
				"longitude": 33
			},
			"CZ": {
				"latitude": 49.75,
				"longitude": 15.5
			},
			"DE": {
				"latitude": 51,
				"longitude": 9
			},
			"DJ": {
				"latitude": 11.5,
				"longitude": 43
			},
			"DK": {
				"latitude": 56,
				"longitude": 10
			},
			"DM": {
				"latitude": 15.4167,
				"longitude": -61.3333
			},
			"DO": {
				"latitude": 19,
				"longitude": -70.6667
			},
			"DZ": {
				"latitude": 28,
				"longitude": 3
			},
			"EC": {
				"latitude": -2,
				"longitude": -77.5
			},
			"EE": {
				"latitude": 59,
				"longitude": 26
			},
			"EG": {
				"latitude": 27,
				"longitude": 30
			},
			"EH": {
				"latitude": 24.5,
				"longitude": -13
			},
			"ER": {
				"latitude": 15,
				"longitude": 39
			},
			"ES": {
				"latitude": 40,
				"longitude": -4
			},
			"ET": {
				"latitude": 8,
				"longitude": 38
			},
			"EU": {
				"latitude": 47,
				"longitude": 8
			},
			"FI": {
				"latitude": 62,
				"longitude": 26
			},
			"FJ": {
				"latitude": -18,
				"longitude": 175
			},
			"FK": {
				"latitude": -51.75,
				"longitude": -59
			},
			"FM": {
				"latitude": 6.9167,
				"longitude": 158.25
			},
			"FO": {
				"latitude": 62,
				"longitude": -7
			},
			"FR": {
				"latitude": 46,
				"longitude": 2
			},
			"GA": {
				"latitude": -1,
				"longitude": 11.75
			},
			"GB": {
				"latitude": 54,
				"longitude": -2
			},
			"GD": {
				"latitude": 12.1167,
				"longitude": -61.6667
			},
			"GE": {
				"latitude": 42,
				"longitude": 43.5
			},
			"GF": {
				"latitude": 4,
				"longitude": -53
			},
			"GH": {
				"latitude": 8,
				"longitude": -2
			},
			"GI": {
				"latitude": 36.1833,
				"longitude": -5.3667
			},
			"GL": {
				"latitude": 72,
				"longitude": -40
			},
			"GM": {
				"latitude": 13.4667,
				"longitude": -16.5667
			},
			"GN": {
				"latitude": 11,
				"longitude": -10
			},
			"GP": {
				"latitude": 16.25,
				"longitude": -61.5833
			},
			"GQ": {
				"latitude": 2,
				"longitude": 10
			},
			"GR": {
				"latitude": 39,
				"longitude": 22
			},
			"GS": {
				"latitude": -54.5,
				"longitude": -37
			},
			"GT": {
				"latitude": 15.5,
				"longitude": -90.25
			},
			"GU": {
				"latitude": 13.4667,
				"longitude": 144.7833
			},
			"GW": {
				"latitude": 12,
				"longitude": -15
			},
			"GY": {
				"latitude": 5,
				"longitude": -59
			},
			"HK": {
				"latitude": 22.25,
				"longitude": 114.1667
			},
			"HM": {
				"latitude": -53.1,
				"longitude": 72.5167
			},
			"HN": {
				"latitude": 15,
				"longitude": -86.5
			},
			"HR": {
				"latitude": 45.1667,
				"longitude": 15.5
			},
			"HT": {
				"latitude": 19,
				"longitude": -72.4167
			},
			"HU": {
				"latitude": 47,
				"longitude": 20
			},
			"ID": {
				"latitude": -5,
				"longitude": 120
			},
			"IE": {
				"latitude": 53,
				"longitude": -8
			},
			"IL": {
				"latitude": 31.5,
				"longitude": 34.75
			},
			"IN": {
				"latitude": 20,
				"longitude": 77
			},
			"IO": {
				"latitude": -6,
				"longitude": 71.5
			},
			"IQ": {
				"latitude": 33,
				"longitude": 44
			},
			"IR": {
				"latitude": 32,
				"longitude": 53
			},
			"IS": {
				"latitude": 65,
				"longitude": -18
			},
			"IT": {
				"latitude": 42.8333,
				"longitude": 12.8333
			},
			"JM": {
				"latitude": 18.25,
				"longitude": -77.5
			},
			"JO": {
				"latitude": 31,
				"longitude": 36
			},
			"JP": {
				"latitude": 36,
				"longitude": 138
			},
			"KE": {
				"latitude": 1,
				"longitude": 38
			},
			"KG": {
				"latitude": 41,
				"longitude": 75
			},
			"KH": {
				"latitude": 13,
				"longitude": 105
			},
			"KI": {
				"latitude": 1.4167,
				"longitude": 173
			},
			"KM": {
				"latitude": -12.1667,
				"longitude": 44.25
			},
			"KN": {
				"latitude": 17.3333,
				"longitude": -62.75
			},
			"KP": {
				"latitude": 40,
				"longitude": 127
			},
			"KR": {
				"latitude": 37,
				"longitude": 127.5
			},
			"KW": {
				"latitude": 29.3375,
				"longitude": 47.6581
			},
			"KY": {
				"latitude": 19.5,
				"longitude": -80.5
			},
			"KZ": {
				"latitude": 48,
				"longitude": 68
			},
			"LA": {
				"latitude": 18,
				"longitude": 105
			},
			"LB": {
				"latitude": 33.8333,
				"longitude": 35.8333
			},
			"LC": {
				"latitude": 13.8833,
				"longitude": -61.1333
			},
			"LI": {
				"latitude": 47.1667,
				"longitude": 9.5333
			},
			"LK": {
				"latitude": 7,
				"longitude": 81
			},
			"LR": {
				"latitude": 6.5,
				"longitude": -9.5
			},
			"LS": {
				"latitude": -29.5,
				"longitude": 28.5
			},
			"LT": {
				"latitude": 55,
				"longitude": 24
			},
			"LU": {
				"latitude": 49.75,
				"longitude": 6
			},
			"LV": {
				"latitude": 57,
				"longitude": 25
			},
			"LY": {
				"latitude": 25,
				"longitude": 17
			},
			"MA": {
				"latitude": 32,
				"longitude": -5
			},
			"MC": {
				"latitude": 43.7333,
				"longitude": 7.4
			},
			"MD": {
				"latitude": 47,
				"longitude": 29
			},
			"ME": {
				"latitude": 42.5,
				"longitude": 19.4
			},
			"MG": {
				"latitude": -20,
				"longitude": 47
			},
			"MH": {
				"latitude": 9,
				"longitude": 168
			},
			"MK": {
				"latitude": 41.8333,
				"longitude": 22
			},
			"ML": {
				"latitude": 17,
				"longitude": -4
			},
			"MM": {
				"latitude": 22,
				"longitude": 98
			},
			"MN": {
				"latitude": 46,
				"longitude": 105
			},
			"MO": {
				"latitude": 22.1667,
				"longitude": 113.55
			},
			"MP": {
				"latitude": 15.2,
				"longitude": 145.75
			},
			"MQ": {
				"latitude": 14.6667,
				"longitude": -61
			},
			"MR": {
				"latitude": 20,
				"longitude": -12
			},
			"MS": {
				"latitude": 16.75,
				"longitude": -62.2
			},
			"MT": {
				"latitude": 35.8333,
				"longitude": 14.5833
			},
			"MU": {
				"latitude": -20.2833,
				"longitude": 57.55
			},
			"MV": {
				"latitude": 3.25,
				"longitude": 73
			},
			"MW": {
				"latitude": -13.5,
				"longitude": 34
			},
			"MX": {
				"latitude": 23,
				"longitude": -102
			},
			"MY": {
				"latitude": 2.5,
				"longitude": 112.5
			},
			"MZ": {
				"latitude": -18.25,
				"longitude": 35
			},
			"NA": {
				"latitude": -22,
				"longitude": 17
			},
			"NC": {
				"latitude": -21.5,
				"longitude": 165.5
			},
			"NE": {
				"latitude": 16,
				"longitude": 8
			},
			"NF": {
				"latitude": -29.0333,
				"longitude": 167.95
			},
			"NG": {
				"latitude": 10,
				"longitude": 8
			},
			"NI": {
				"latitude": 13,
				"longitude": -85
			},
			"NL": {
				"latitude": 52.5,
				"longitude": 5.75
			},
			"NO": {
				"latitude": 62,
				"longitude": 10
			},
			"NP": {
				"latitude": 28,
				"longitude": 84
			},
			"NR": {
				"latitude": -0.5333,
				"longitude": 166.9167
			},
			"NU": {
				"latitude": -19.0333,
				"longitude": -169.8667
			},
			"NZ": {
				"latitude": -41,
				"longitude": 174
			},
			"OM": {
				"latitude": 21,
				"longitude": 57
			},
			"PA": {
				"latitude": 9,
				"longitude": -80
			},
			"PE": {
				"latitude": -10,
				"longitude": -76
			},
			"PF": {
				"latitude": -15,
				"longitude": -140
			},
			"PG": {
				"latitude": -6,
				"longitude": 147
			},
			"PH": {
				"latitude": 13,
				"longitude": 122
			},
			"PK": {
				"latitude": 30,
				"longitude": 70
			},
			"PL": {
				"latitude": 52,
				"longitude": 20
			},
			"PM": {
				"latitude": 46.8333,
				"longitude": -56.3333
			},
			"PR": {
				"latitude": 18.25,
				"longitude": -66.5
			},
			"PS": {
				"latitude": 32,
				"longitude": 35.25
			},
			"PT": {
				"latitude": 39.5,
				"longitude": -8
			},
			"PW": {
				"latitude": 7.5,
				"longitude": 134.5
			},
			"PY": {
				"latitude": -23,
				"longitude": -58
			},
			"QA": {
				"latitude": 25.5,
				"longitude": 51.25
			},
			"RE": {
				"latitude": -21.1,
				"longitude": 55.6
			},
			"RO": {
				"latitude": 46,
				"longitude": 25
			},
			"RS": {
				"latitude": 44,
				"longitude": 21
			},
			"RU": {
				"latitude": 60,
				"longitude": 100
			},
			"RW": {
				"latitude": -2,
				"longitude": 30
			},
			"SA": {
				"latitude": 25,
				"longitude": 45
			},
			"SB": {
				"latitude": -8,
				"longitude": 159
			},
			"SC": {
				"latitude": -4.5833,
				"longitude": 55.6667
			},
			"SD": {
				"latitude": 15,
				"longitude": 30
			},
			"SE": {
				"latitude": 62,
				"longitude": 15
			},
			"SG": {
				"latitude": 1.3667,
				"longitude": 103.8
			},
			"SH": {
				"latitude": -15.9333,
				"longitude": -5.7
			},
			"SI": {
				"latitude": 46,
				"longitude": 15
			},
			"SJ": {
				"latitude": 78,
				"longitude": 20
			},
			"SK": {
				"latitude": 48.6667,
				"longitude": 19.5
			},
			"SL": {
				"latitude": 8.5,
				"longitude": -11.5
			},
			"SM": {
				"latitude": 43.7667,
				"longitude": 12.4167
			},
			"SN": {
				"latitude": 14,
				"longitude": -14
			},
			"SO": {
				"latitude": 10,
				"longitude": 49
			},
			"SR": {
				"latitude": 4,
				"longitude": -56
			},
			"ST": {
				"latitude": 1,
				"longitude": 7
			},
			"SV": {
				"latitude": 13.8333,
				"longitude": -88.9167
			},
			"SY": {
				"latitude": 35,
				"longitude": 38
			},
			"SZ": {
				"latitude": -26.5,
				"longitude": 31.5
			},
			"TC": {
				"latitude": 21.75,
				"longitude": -71.5833
			},
			"TD": {
				"latitude": 15,
				"longitude": 19
			},
			"TF": {
				"latitude": -43,
				"longitude": 67
			},
			"TG": {
				"latitude": 8,
				"longitude": 1.1667
			},
			"TH": {
				"latitude": 15,
				"longitude": 100
			},
			"TJ": {
				"latitude": 39,
				"longitude": 71
			},
			"TK": {
				"latitude": -9,
				"longitude": -172
			},
			"TM": {
				"latitude": 40,
				"longitude": 60
			},
			"TN": {
				"latitude": 34,
				"longitude": 9
			},
			"TO": {
				"latitude": -20,
				"longitude": -175
			},
			"TR": {
				"latitude": 39,
				"longitude": 35
			},
			"TT": {
				"latitude": 11,
				"longitude": -61
			},
			"TV": {
				"latitude": -8,
				"longitude": 178
			},
			"TW": {
				"latitude": 23.5,
				"longitude": 121
			},
			"TZ": {
				"latitude": -6,
				"longitude": 35
			},
			"UA": {
				"latitude": 49,
				"longitude": 32
			},
			"UG": {
				"latitude": 1,
				"longitude": 32
			},
			"UM": {
				"latitude": 19.2833,
				"longitude": 166.6
			},
			"US": {
				"latitude": 38,
				"longitude": -97
			},
			"UY": {
				"latitude": -33,
				"longitude": -56
			},
			"UZ": {
				"latitude": 41,
				"longitude": 64
			},
			"VA": {
				"latitude": 41.9,
				"longitude": 12.45
			},
			"VC": {
				"latitude": 13.25,
				"longitude": -61.2
			},
			"VE": {
				"latitude": 8,
				"longitude": -66
			},
			"VG": {
				"latitude": 18.5,
				"longitude": -64.5
			},
			"VI": {
				"latitude": 18.3333,
				"longitude": -64.8333
			},
			"VN": {
				"latitude": 16,
				"longitude": 106
			},
			"VU": {
				"latitude": -16,
				"longitude": 167
			},
			"WF": {
				"latitude": -13.3,
				"longitude": -176.2
			},
			"WS": {
				"latitude": -13.5833,
				"longitude": -172.3333
			},
			"YE": {
				"latitude": 15,
				"longitude": 48
			},
			"YT": {
				"latitude": -12.8333,
				"longitude": 45.1667
			},
			"ZA": {
				"latitude": -29,
				"longitude": 24
			},
			"ZM": {
				"latitude": -15,
				"longitude": 30
			},
			"ZW": {
				"latitude": -20,
				"longitude": 30
			}
		};
		//To change individual colors for bubbles use code below in country id
		/*"color": "#de4c4f"*/
		var mapData = [{
				"id": "AF",
				"name": "Afghanistan",
				"value": 9.2,
				"color": chart.colors.getIndex(0),
				 "fill": am4core.color("#fff")
			},
			{
				"id": "AL",
				"name": "Albania",
				"value": 9,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "DZ",
				"name": "Algeria",
				"value": 6.7,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "AO",
				"name": "Angola",
				"value": 4.5,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "AR",
				"name": "Argentina",
				"value": 5.9,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "AM",
				"name": "Armenia",
				"value": 6.1,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "AU",
				"name": "Australia",
				"value": 5.6,
				"color": "#8aabb0"
			},
			{
				"id": "AT",
				"name": "Austria",
				"value": 6.6,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "AZ",
				"name": "Azerbaijan",
				"value": 6.1,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "BH",
				"name": "Bahrain",
				"value": 15.6,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "BD",
				"name": "Bangladesh",
				"value": 9.2,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "BY",
				"name": "Belarus",
				"value": 5,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "BE",
				"name": "Belgium",
				"value": 4.6,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "BJ",
				"name": "Benin",
				"value": 1,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "BT",
				"name": "Bhutan",
				"value": 10.3,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "BO",
				"name": "Bolivia",
				"value": 6.8,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "BA",
				"name": "Bosnia and Herzegovina",
				"value": 9,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "BW",
				"name": "Botswana",
				"value": 5.8,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "BR",
				"name": "Brazil",
				"value": 10.4,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "BN",
				"name": "Brunei",
				"value": 13.3,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "BG",
				"name": "Bulgaria",
				"value": 6,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "BF",
				"name": "Burkina Faso",
				"value": 7.3,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "BI",
				"name": "Burundi",
				"value": 6,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "KH",
				"name": "Cambodia",
				"value": 6.4,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "CM",
				"name": "Cameroon",
				"value": 6,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "CA",
				"name": "Canada",
				"value": 7.6,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "CV",
				"name": "Cape Verde",
				"value": 2.4,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "CF",
				"name": "Central African Rep.",
				"value": 6,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "TD",
				"name": "Chad",
				"value": 6,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "CL",
				"name": "Chile",
				"value": 8.6,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "CN",
				"name": "China",
				"value": 9.2,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "CO",
				"name": "Colombia",
				"value": 7.4,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "KM",
				"name": "Comoros",
				"value": 12.3,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "CD",
				"name": "Congo, Dem. Rep.",
				"value": 6,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "CG",
				"name": "Congo, Rep.",
				"value": 6.5,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "CR",
				"name": "Costa Rica",
				"value": 9.1,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "CI",
				"name": "Cote d'Ivoire",
				"value": 2.4,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "HR",
				"name": "Croatia",
				"value": 5.4,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "CU",
				"name": "Cuba",
				"value": 9.6,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "CY",
				"name": "Cyprus",
				"value": 9,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "CZ",
				"name": "Czech Rep.",
				"value": 7,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "DK",
				"name": "Denmark",
				"value": 8.3,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "DJ",
				"name": "Djibouti",
				"value": 5.1,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "DO",
				"name": "Dominican Rep.",
				"value": 8.6,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "EC",
				"name": "Ecuador",
				"value": 5.5,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "EG",
				"name": "Egypt",
				"value": 17.2,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "SV",
				"name": "El Salvador",
				"value": 8.8,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "GQ",
				"name": "Equatorial Guinea",
				"value": 6,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "ER",
				"name": "Eritrea",
				"value": 5.1,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "EE",
				"name": "Estonia",
				"value": 4.2,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "ET",
				"name": "Ethiopia",
				"value": 4.3,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "FJ",
				"name": "Fiji",
				"value": 14.7,
				"color": "#8aabb0"
			},
			{
				"id": "FI",
				"name": "Finland",
				"value": 5.6,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "FR",
				"name": "France",
				"value": 4.8,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "GA",
				"name": "Gabon",
				"value": 6,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "GM",
				"name": "Gambia",
				"value": 1.9,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "GE",
				"name": "Georgia",
				"value": 5.8,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "DE",
				"name": "Germany",
				"value": 10.4,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "GH",
				"name": "Ghana",
				"value": 2.5,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "GR",
				"name": "Greece",
				"value": 4.7,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "GT",
				"name": "Guatemala",
				"value": 10,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "GN",
				"name": "Guinea",
				"value": 2.4,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "GW",
				"name": "Guinea-Bissau",
				"value": 2.4,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "GY",
				"name": "Guyana",
				"value": 11.6,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "HT",
				"name": "Haiti",
				"value": 6.7,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "HN",
				"name": "Honduras",
				"value": 7.3,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "HK",
				"name": "Hong Kong, China",
				"value": 4.5,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "HU",
				"name": "Hungary",
				"value": 6.9,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "IS",
				"name": "Iceland",
				"value": 5.8,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "IN",
				"name": "India",
				"value": 10.4,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "ID",
				"name": "Indonesia",
				"value": 6.3,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "IR",
				"name": "Iran",
				"value": 9.6,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "IQ",
				"name": "Iraq",
				"value": 8.8,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "IE",
				"name": "Ireland",
				"value": 3.2,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "IL",
				"name": "Israel",
				"value": 9.7,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "IT",
				"name": "Italy",
				"value": 5,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "JM",
				"name": "Jamaica",
				"value": 11.3,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "JP",
				"name": "Japan",
				"value": 5.6,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "JO",
				"name": "Jordan",
				"value": 12.7,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "KZ",
				"name": "Kazakhstan",
				"value": 6.1,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "KE",
				"name": "Kenya",
				"value": 3.1,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "KP",
				"name": "Korea, Dem. Rep.",
				"value": 2.4,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "KR",
				"name": "Korea, Rep.",
				"value": 2.5,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "KW",
				"name": "Kuwait",
				"value": 12.2,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "KG",
				"name": "Kyrgyzstan",
				"value": 6.1,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "LA",
				"name": "Laos",
				"value": 1.5,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "LV",
				"name": "Latvia",
				"value": 5,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "LB",
				"name": "Lebanon",
				"value": 11.2,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "LS",
				"name": "Lesotho",
				"value": 4.5,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "LR",
				"name": "Liberia",
				"value": 2.4,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "LY",
				"name": "Libya",
				"value": 10.2,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "LT",
				"name": "Lithuania",
				"value": 3.8,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "LU",
				"name": "Luxembourg",
				"value": 5,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "MK",
				"name": "Macedonia, FYR",
				"value": 1,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "MG",
				"name": "Madagascar",
				"value": 4.5,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "MW",
				"name": "Malawi",
				"value": 4.5,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "MY",
				"name": "Malaysia",
				"value": 16.7,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "ML",
				"name": "Mali",
				"value": 2.4,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "MR",
				"name": "Mauritania",
				"value": 7.1,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "MU",
				"name": "Mauritius",
				"value": 22,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "MX",
				"name": "Mexico",
				"value": 13.5,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "MD",
				"name": "Moldova",
				"value": 2.3,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "MN",
				"name": "Mongolia",
				"value": 4.7,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "ME",
				"name": "Montenegro",
				"value": 9,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "MA",
				"name": "Morocco",
				"value": 7,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "MZ",
				"name": "Mozambique",
				"value": 3.3,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "MM",
				"name": "Myanmar",
				"value": 3.9,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "NA",
				"name": "Namibia",
				"value": 4.5,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "NP",
				"name": "Nepal",
				"value": 7.2,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "NL",
				"name": "Netherlands",
				"value": 5.4,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "NZ",
				"name": "New Zealand",
				"value": 6.2,
				"color": "#8aabb0"
			},
			{
				"id": "NI",
				"name": "Nicaragua",
				"value": 11.4,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "NE",
				"name": "Niger",
				"value": 2.4,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "NG",
				"name": "Nigeria",
				"value": 3.1,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "NO",
				"name": "Norway",
				"value": 5.3,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "OM",
				"name": "Oman",
				"value": 10.1,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "PK",
				"name": "Pakistan",
				"value": 19.9,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "PA",
				"name": "Panama",
				"value": 7.7,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "PG",
				"name": "Papua New Guinea",
				"value": 17.9,
				"color": "#8aabb0"
			},
			{
				"id": "PY",
				"name": "Paraguay",
				"value": 9.6,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "PE",
				"name": "Peru",
				"value": 6.6,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "PH",
				"name": "Philippines",
				"value": 7.1,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "PL",
				"name": "Poland",
				"value": 6.1,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "PT",
				"name": "Portugal",
				"value": 9.8,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "PR",
				"name": "Puerto Rico",
				"value": 13.7,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "QA",
				"name": "Qatar",
				"value": 15.6,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "RO",
				"name": "Romania",
				"value": 6.9,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "RU",
				"name": "Russia",
				"value": 6.1,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "RW",
				"name": "Rwanda",
				"value": 5.1,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "SA",
				"name": "Saudi Arabia",
				"value": 15.8,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "SN",
				"name": "Senegal",
				"value": 2.4,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "RS",
				"name": "Serbia",
				"value": 9,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "SL",
				"name": "Sierra Leone",
				"value": 2.4,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "SG",
				"name": "Singapore",
				"value": 5.5,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "SK",
				"name": "Slovak Republic",
				"value": 5.9,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "SI",
				"name": "Slovenia",
				"value": 6.5,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "SB",
				"name": "Solomon Islands",
				"value": 19,
				"color": "#8aabb0"
			},
			{
				"id": "SO",
				"name": "Somalia",
				"value": 5.1,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "ZA",
				"name": "South Africa",
				"value": 12.7,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "ES",
				"name": "Spain",
				"value": 6.9,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "LK",
				"name": "Sri Lanka",
				"value": 10.7,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "SD",
				"name": "Sudan",
				"value": 22.1,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "SR",
				"name": "Suriname",
				"value": 12.5,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "SZ",
				"name": "Swaziland",
				"value": 12.5,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "SE",
				"name": "Sweden",
				"value": 4.8,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "CH",
				"name": "Switzerland",
				"value": 5.7,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "SY",
				"name": "Syria",
				"value": 2.6,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "TW",
				"name": "Taiwan",
				"value": 6.4,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "TJ",
				"name": "Tajikistan",
				"value": 6.1,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "TZ",
				"name": "Tanzania",
				"value": 6.2,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "TH",
				"name": "Thailand",
				"value": 7,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "TG",
				"name": "Togo",
				"value": 2.4,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "TT",
				"name": "Trinidad and Tobago",
				"value": 11,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "TN",
				"name": "Tunisia",
				"value": 8.5,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "TR",
				"name": "Turkey",
				"value": 11.1,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "TM",
				"name": "Turkmenistan",
				"value": 6.1,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "UG",
				"name": "Uganda",
				"value": 2.5,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "UA",
				"name": "Ukraine",
				"value": 6.1,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "AE",
				"name": "United Arab Emirates",
				"value": 16.3,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "GB",
				"name": "United Kingdom",
				"value": 3.9,
				"color": chart.colors.getIndex(1)
			},
			{
				"id": "US",
				"name": "United States",
				"value": 10.8,
				"color": chart.colors.getIndex(4)
			},
			{
				"id": "UY",
				"name": "Uruguay",
				"value": 7.3,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "UZ",
				"name": "Uzbekistan",
				"value": 6.5,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "VE",
				"name": "Venezuela",
				"value": 7,
				"color": chart.colors.getIndex(3)
			},
			{
				"id": "PS",
				"name": "West Bank and Gaza",
				"value": 6,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "VN",
				"name": "Vietnam",
				"value": 5.5,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "YE",
				"name": "Yemen, Rep.",
				"value": 5.4,
				"color": chart.colors.getIndex(0)
			},
			{
				"id": "ZM",
				"name": "Zambia",
				"value": 4.5,
				"color": chart.colors.getIndex(2)
			},
			{
				"id": "ZW",
				"name": "Zimbabwe",
				"value": 1.8,
				"color": chart.colors.getIndex(2)
			}
		];

		for (var i = 0; i < mapData.length; i++) {
			mapData[i].latitude = latlong[mapData[i].id].latitude;
			mapData[i].longitude = latlong[mapData[i].id].longitude;
		}
		// Set map definition
		chart.geodata = am4geodata_worldLow;
		// Set projection
		chart.projection = new am4maps.projections.Miller();
		// Create map polygon series
		var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
		polygonSeries.exclude = ["AQ"];
		polygonSeries.useGeodata = true;

		var imageSeries = chart.series.push(new am4maps.MapImageSeries());
		imageSeries.data = mapData;
		imageSeries.dataFields.value = "value";

		var imageTemplate = imageSeries.mapImages.template;
		imageTemplate.propertyFields.latitude = "latitude";
		imageTemplate.propertyFields.longitude = "longitude";
		imageTemplate.nonScaling = true

		var circle = imageTemplate.createChild(am4core.Circle);
		circle.fillOpacity = 0.3;
		circle.propertyFields.fill = "color";
		circle.propertyFields.stroke = "color";
		circle.propertyFields.strokeWidth = 30;

		var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
		circle2.radius = 2;
		circle2.fillOpacity = 0.5;
		circle2.propertyFields.fill = "color";

		var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
		circle.radius = 1;
		circle.fillOpacity = 0.3;
		circle.propertyFields.fill = "color";
		circle.propertyFields.stroke = "color";
		circle.propertyFields.fill = "color";

		circle2.events.on("inited", function (event) {
			animateBullet(event.target);
		})

		function animateBullet(circle) {
			var animation = circle.animate([{
				property: "scale",
				from: 1,
				to: 6
			}, {
				property: "opacity",
				from: 1,
				to: 0
			}], 2000, am4core.ease.circleOut);
			animation.events.on("animationended", function (event) {
				animateBullet(event.target.object);
			})
		}

		/*
		circle.tooltipHTML = "<b><span style='font-size:15px;'>{name}</span> <br><b>Population:</b> {pop}<br><b>African Diaspora: </b>{dias}<br><b>Percent:</b>{Pc}";
		*/
		circle.tooltipText = "{name}:[bold]{value}[/]";
		circle.tooltipHTML = "<b><span style='font-size:15px;text-align:center;'>{name}</span><br><b>% Diabetes Population: {value}%</b>";

		imageSeries.heatRules.push({
			"target": circle,
			"property": "radius",
			"min": 1,
			"max": 24,
			"dataField": "value"
		})