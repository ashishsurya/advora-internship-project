export function extractUpcomingRides(rides) {
  var upcomingrides = [];
  upcomingrides = rides?.map(ride => {
    const a = new Date();
    const b = new Date(ride.date)


    if (b.getTime() > a.getTime()) {
      return ride;
    }

  })

  return upcomingrides;
}

// console.log(extractUpcomingRides([
//   {
//     "city": "Sopore",
//     "date": "04/03/2022 11:27 PM",
//     "destination_station_code": 91,
//     "id": 247,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 9,
//     "state": "Jammu and Kashmir",
//     "station_path": [
//       53,
//       66,
//       78,
//       87
//     ]
//   },
//   {
//     "city": "Chennai",
//     "date": "02/27/2022 09:06 PM",
//     "destination_station_code": 96,
//     "id": 333,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 13,
//     "state": "Tamil Nadu",
//     "station_path": [
//       31,
//       40,
//       57,
//       69,
//       77,
//       82
//     ]
//   },
//   {
//     "city": "Chandigarh",
//     "date": "02/26/2022 05:26 AM",
//     "destination_station_code": 96,
//     "id": 781,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 16,
//     "state": "Chandigarh",
//     "station_path": [
//       42,
//       57,
//       68,
//       78,
//       85
//     ]
//   },
//   {
//     "city": "Mahe",
//     "date": "03/13/2022 10:29 PM",
//     "destination_station_code": 91,
//     "id": 380,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 12,
//     "state": "Puducherry",
//     "station_path": [
//       52,
//       62,
//       78,
//       87
//     ]
//   },
//   {
//     "city": "Silvassa",
//     "date": "03/26/2022 02:06 PM",
//     "destination_station_code": 94,
//     "id": 730,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 14,
//     "state": "Dadra and Nagar Haveli",
//     "station_path": [
//       44,
//       55,
//       65,
//       77,
//       81
//     ]
//   },
//   {
//     "city": "Pasighat",
//     "date": "03/28/2022 07:04 AM",
//     "destination_station_code": 98,
//     "id": 541,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 15,
//     "state": "Arunachal Pradesh",
//     "station_path": [
//       26,
//       34,
//       46,
//       59,
//       69,
//       79,
//       82
//     ]
//   },
//   {
//     "city": "Cuttack",
//     "date": "02/23/2022 06:04 PM",
//     "destination_station_code": 99,
//     "id": 413,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 18,
//     "state": "Odisha",
//     "station_path": [
//       47,
//       58,
//       66,
//       72,
//       80
//     ]
//   },
//   {
//     "city": "New Delhi",
//     "date": "03/07/2022 11:36 PM",
//     "destination_station_code": 90,
//     "id": 399,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 6,
//     "state": "Delhi",
//     "station_path": [
//       61,
//       72,
//       83
//     ]
//   },
//   {
//     "city": "Silvassa",
//     "date": "04/02/2022 09:12 PM",
//     "destination_station_code": 94,
//     "id": 837,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 19,
//     "state": "Dadra and Nagar Haveli",
//     "station_path": [
//       60,
//       79,
//       82
//     ]
//   },
//   {
//     "city": "Mahe",
//     "date": "02/15/2022 06:07 AM",
//     "destination_station_code": 90,
//     "id": 287,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 10,
//     "state": "Puducherry",
//     "station_path": [
//       47,
//       52,
//       65,
//       74,
//       81
//     ]
//   },
//   {
//     "city": "Panaji",
//     "date": "02/15/2022 08:38 AM",
//     "destination_station_code": 91,
//     "id": 895,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 7,
//     "state": "Goa",
//     "station_path": [
//       49,
//       53,
//       62,
//       79,
//       87
//     ]
//   },
//   {
//     "city": "Gurgaon",
//     "date": "03/04/2022 10:46 AM",
//     "destination_station_code": 93,
//     "id": 266,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 17,
//     "state": "Haryana",
//     "station_path": [
//       53,
//       68,
//       77,
//       85
//     ]
//   },
//   {
//     "city": "Ranchi",
//     "date": "02/17/2022 09:49 AM",
//     "destination_station_code": 92,
//     "id": 988,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 5,
//     "state": "Jharkhand",
//     "station_path": [
//       41,
//       55,
//       67,
//       79,
//       89
//     ]
//   },
//   {
//     "city": "Mavelikkara",
//     "date": "03/03/2022 02:39 PM",
//     "destination_station_code": 94,
//     "id": 608,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 15,
//     "state": "Kerala",
//     "station_path": [
//       57,
//       61,
//       76,
//       88
//     ]
//   },
//   {
//     "city": "Tura",
//     "date": "03/13/2022 05:57 AM",
//     "destination_station_code": 91,
//     "id": 664,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 3,
//     "state": "Meghalaya",
//     "station_path": [
//       40,
//       56,
//       62,
//       74,
//       83
//     ]
//   },
//   {
//     "city": "Sangareddy",
//     "date": "02/12/2022 11:59 AM",
//     "destination_station_code": 99,
//     "id": 783,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 19,
//     "state": "Telangana",
//     "station_path": [
//       22,
//       38,
//       40,
//       53,
//       67,
//       79,
//       80
//     ]
//   },
//   {
//     "city": "Jorhat",
//     "date": "02/18/2022 06:53 AM",
//     "destination_station_code": 92,
//     "id": 862,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 4,
//     "state": "Assam",
//     "station_path": [
//       20,
//       30,
//       48,
//       58,
//       67,
//       74,
//       87
//     ]
//   },
//   {
//     "city": "Ottappalam",
//     "date": "02/20/2022 08:42 PM",
//     "destination_station_code": 98,
//     "id": 265,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 14,
//     "state": "Kerala",
//     "station_path": [
//       50,
//       68,
//       77,
//       86
//     ]
//   },
//   {
//     "city": "Mapusa",
//     "date": "04/03/2022 04:58 PM",
//     "destination_station_code": 96,
//     "id": 648,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 7,
//     "state": "Goa",
//     "station_path": [
//       63,
//       75,
//       88
//     ]
//   },
//   {
//     "city": "Anantnag",
//     "date": "03/25/2022 04:17 PM",
//     "destination_station_code": 90,
//     "id": 601,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 17,
//     "state": "Jammu and Kashmir",
//     "station_path": [
//       27,
//       36,
//       40,
//       56,
//       69,
//       76,
//       88
//     ]
//   },
//   {
//     "city": "Karnal",
//     "date": "02/06/2022 04:22 PM",
//     "destination_station_code": 90,
//     "id": 852,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 18,
//     "state": "Haryana",
//     "station_path": [
//       54,
//       64,
//       73,
//       84
//     ]
//   },
//   {
//     "city": "Ranibennur",
//     "date": "03/08/2022 03:07 PM",
//     "destination_station_code": 99,
//     "id": 911,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 3,
//     "state": "Karnataka",
//     "station_path": [
//       43,
//       55,
//       68,
//       78,
//       81
//     ]
//   },
//   {
//     "city": "Mahe",
//     "date": "02/18/2022 05:39 AM",
//     "destination_station_code": 91,
//     "id": 980,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 2,
//     "state": "Puducherry",
//     "station_path": [
//       35,
//       43,
//       57,
//       68,
//       72,
//       88
//     ]
//   },
//   {
//     "city": "Ladwa",
//     "date": "03/11/2022 06:28 PM",
//     "destination_station_code": 95,
//     "id": 424,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 12,
//     "state": "Haryana",
//     "station_path": [
//       38,
//       40,
//       55,
//       62,
//       71,
//       81
//     ]
//   },
//   {
//     "city": "Aizawl",
//     "date": "04/03/2022 10:01 PM",
//     "destination_station_code": 90,
//     "id": 460,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 6,
//     "state": "Mizoram",
//     "station_path": [
//       57,
//       62,
//       73,
//       80
//     ]
//   },
//   {
//     "city": "Yemmiganur",
//     "date": "03/21/2022 08:13 AM",
//     "destination_station_code": 99,
//     "id": 493,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 8,
//     "state": "Andhra Pradesh",
//     "station_path": [
//       57,
//       63,
//       77,
//       89
//     ]
//   },
//   {
//     "city": "Shahade",
//     "date": "02/23/2022 01:13 AM",
//     "destination_station_code": 99,
//     "id": 403,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 15,
//     "state": "Maharashtra",
//     "station_path": [
//       42,
//       54,
//       60,
//       70,
//       85
//     ]
//   },
//   {
//     "city": "Belonia",
//     "date": "03/24/2022 09:38 PM",
//     "destination_station_code": 93,
//     "id": 805,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 3,
//     "state": "Tripura",
//     "station_path": [
//       67,
//       71,
//       85
//     ]
//   },
//   {
//     "city": "Solan",
//     "date": "02/11/2022 08:36 PM",
//     "destination_station_code": 94,
//     "id": 624,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 2,
//     "state": "Himachal Pradesh",
//     "station_path": [
//       30,
//       44,
//       51,
//       68,
//       74,
//       88
//     ]
//   },
//   {
//     "city": "Pratapgarh",
//     "date": "02/09/2022 09:09 PM",
//     "destination_station_code": 96,
//     "id": 107,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 14,
//     "state": "Tripura",
//     "station_path": [
//       58,
//       62,
//       75,
//       82
//     ]
//   },
//   {
//     "city": "Raxaul Bazar",
//     "date": "02/23/2022 09:54 AM",
//     "destination_station_code": 91,
//     "id": 505,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 16,
//     "state": "Bihar",
//     "station_path": [
//       28,
//       30,
//       49,
//       56,
//       66,
//       78,
//       84
//     ]
//   },
//   {
//     "city": "Silapathar",
//     "date": "02/23/2022 06:53 PM",
//     "destination_station_code": 95,
//     "id": 134,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 8,
//     "state": "Assam",
//     "station_path": [
//       27,
//       33,
//       48,
//       50,
//       66,
//       75,
//       84
//     ]
//   },
//   {
//     "city": "Nokha",
//     "date": "03/04/2022 10:20 PM",
//     "destination_station_code": 94,
//     "id": 346,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 13,
//     "state": "Rajasthan",
//     "station_path": [
//       23,
//       39,
//       47,
//       53,
//       62,
//       77,
//       88
//     ]
//   },
//   {
//     "city": "Ottappalam",
//     "date": "02/03/2022 12:20 AM",
//     "destination_station_code": 96,
//     "id": 964,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 13,
//     "state": "Kerala",
//     "station_path": [
//       20,
//       34,
//       48,
//       59,
//       66,
//       77,
//       82
//     ]
//   },
//   {
//     "city": "Udaipur",
//     "date": "03/25/2022 12:17 AM",
//     "destination_station_code": 93,
//     "id": 286,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 4,
//     "state": "Tripura",
//     "station_path": [
//       52,
//       64,
//       79,
//       80
//     ]
//   },
//   {
//     "city": "Aizawl",
//     "date": "02/19/2022 08:51 AM",
//     "destination_station_code": 94,
//     "id": 338,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 7,
//     "state": "Mizoram",
//     "station_path": [
//       23,
//       34,
//       44,
//       56,
//       62,
//       73,
//       89
//     ]
//   },
//   {
//     "city": "Raghunathganj",
//     "date": "03/22/2022 04:15 AM",
//     "destination_station_code": 98,
//     "id": 532,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 19,
//     "state": "West Bengal",
//     "station_path": [
//       60,
//       76,
//       81
//     ]
//   },
//   {
//     "city": "Imphal",
//     "date": "02/17/2022 11:36 AM",
//     "destination_station_code": 91,
//     "id": 326,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 7,
//     "state": "Manipur",
//     "station_path": [
//       53,
//       66,
//       70,
//       83
//     ]
//   },
//   {
//     "city": "Ambikapur",
//     "date": "02/22/2022 09:51 PM",
//     "destination_station_code": 91,
//     "id": 357,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 12,
//     "state": "Chhattisgarh",
//     "station_path": [
//       67,
//       77,
//       80
//     ]
//   },
//   {
//     "city": "Silvassa",
//     "date": "02/14/2022 08:20 PM",
//     "destination_station_code": 99,
//     "id": 401,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 6,
//     "state": "Dadra and Nagar Haveli",
//     "station_path": [
//       54,
//       67,
//       79,
//       86
//     ]
//   },
//   {
//     "city": "Aizawl",
//     "date": "02/22/2022 05:10 AM",
//     "destination_station_code": 91,
//     "id": 167,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 11,
//     "state": "Mizoram",
//     "station_path": [
//       66,
//       77,
//       83
//     ]
//   },
//   {
//     "city": "Saiha",
//     "date": "02/10/2022 10:44 PM",
//     "destination_station_code": 91,
//     "id": 598,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 16,
//     "state": "Mizoram",
//     "station_path": [
//       33,
//       46,
//       50,
//       69,
//       73,
//       86
//     ]
//   },
//   {
//     "city": "Port Blair",
//     "date": "02/16/2022 07:14 PM",
//     "destination_station_code": 96,
//     "id": 900,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 13,
//     "state": "Andaman and Nicobar Islands",
//     "station_path": [
//       44,
//       57,
//       63,
//       77,
//       87
//     ]
//   },
//   {
//     "city": "Khambhat",
//     "date": "02/15/2022 06:10 AM",
//     "destination_station_code": 99,
//     "id": 149,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 2,
//     "state": "Gujarat",
//     "station_path": [
//       64,
//       78,
//       80
//     ]
//   },
//   {
//     "city": "Aizawl",
//     "date": "02/28/2022 11:19 PM",
//     "destination_station_code": 94,
//     "id": 474,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 14,
//     "state": "Mizoram",
//     "station_path": [
//       22,
//       34,
//       49,
//       59,
//       69,
//       77,
//       87
//     ]
//   },
//   {
//     "city": "Orai",
//     "date": "02/22/2022 03:23 PM",
//     "destination_station_code": 98,
//     "id": 824,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 8,
//     "state": "Uttar Pradesh",
//     "station_path": [
//       23,
//       31,
//       48,
//       59,
//       67,
//       76,
//       82
//     ]
//   },
//   {
//     "city": "Karaikal",
//     "date": "04/03/2022 09:38 PM",
//     "destination_station_code": 95,
//     "id": 577,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 7,
//     "state": "Puducherry",
//     "station_path": [
//       62,
//       75,
//       87
//     ]
//   },
//   {
//     "city": "Adityapur",
//     "date": "02/14/2022 04:54 PM",
//     "destination_station_code": 98,
//     "id": 412,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 5,
//     "state": "Jharkhand",
//     "station_path": [
//       59,
//       61,
//       74,
//       86
//     ]
//   },
//   {
//     "city": "Soron",
//     "date": "02/08/2022 01:03 PM",
//     "destination_station_code": 91,
//     "id": 345,
//     "map_url": "https://picsum.photos/200",
//     "origin_station_code": 3,
//     "state": "Uttar Pradesh",
//     "station_path": [
//       57,
//       60,
//       75,
//       88
//     ]
//   }
// ]))

// // const d1 = new Date();
// // const d2 = new Date("03/31/2022 07:01 AM");


// // console.log(d1.getTime() > d2.getTime());