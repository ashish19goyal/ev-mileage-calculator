const EvsInMarket = {
  twoWheelers: [
    {
      make: "Ather",
      model: "450X",
      description: "One of the best in segment scooters available in India",
      certifiedRange: 116, // in km
      range: 85, // in km
      topSpeed: 80, // in km/h
      pickup: "0-40 in 3.3 seconds",
      torque: 26, // in Nm
      power: 6, //in kw
      battery: {
        capacity: 2.9, // in kwh
        price: 60000, // in Rs
        years: 3,
        distance: 90000, // in km
        dod: 0.85,
      },
    },
    {
      make: "Ather",
      model: "450X Plus",
      description: "2nd tier model available from Ather",
      certifiedRange: 116, //in km
      range: 70, // in km
      topSpeed: 80,
      pickup: "0-40 in 3.9 seconds",
      torque: 22,
      power: 5.4,
      battery: {
        capacity: 2.9, // in kwh
        price: 60000, // in Rs
        years: 3,
        distance: 80000, // in km
        dod: 0.85,
      },
    },
    {
      make: "Bajaj",
      model: "Chetak",
      description:
        "A steel frame top of the class scooter from the house of Bajaj",
      certifiedRange: 95,
      range: 75, // in km
      topSpeed: 60,
      pickup: "0-40 in 4.5 seconds",
      torque: 16,
      power: 4,
      battery: {
        capacity: 3, // in kwh
        price: 45000, // in Rs
        years: 7,
        distance: 70000, // in km
        dod: 0.85,
      },
    },
    {
      make: "TVS",
      model: "iQube",
      description:
        "Delivers a convenient, personalized, connected and eco-friendly experience",
      certifiedRange: 75,
      range: 55, // in km
      topSpeed: 78,
      pickup: "0-40 in 4.2 seconds",
      torque: 14,
      power: 4.4,
      battery: {
        capacity: 2.25, // in kwh
        price: 21000, // in Rs
        years: 3,
        distance: 50000,
        dod: 0.85,
      },
    },
    {
      make: "Revolt",
      model: "RV400",
      description: "The first electric bike to go on sale in India.",
      certifiedRange: 150,
      range: 100, // in km
      topSpeed: 85,
      pickup: "0-60 in 8 seconds",
      torque: 170,
      power: 3,
      battery: {
        capacity: 3.24, // in kw
        price: 45000, // in Rs
        years: 8,
        distance: 150000,
        dod: 0.85,
      },
    },
    {
      make: "Revolt",
      model: "RV300",
      description: "2nd tier bike from Revolt",
      certifiedRange: 180,
      range: 80, // in km
      topSpeed: 65,
      pickup: "0-60 in 8 seconds",
      torque: 170,
      power: 1.5,
      battery: {
        capacity: 2.7, // in kw
        price: 40000, // in Rs
        years: 8,
        distance: 150000,
        dod: 0.85,
      },
    },
    {
      make: "Hero",
      model: "Photon",
      description: "A economy scooter from Hero",
      certifiedRange: 108,
      range: 80, // in km
      topSpeed: 45,
      pickup: "",
      torque: 2.6,
      power: 1.5,
      battery: {
        capacity: 1.34, // in kw
        price: 22000, // in Rs
        years: 3,
        distance: 30000,
        dod: 0.85,
      },
    },
  ],

  threeWheelers: [
    {
      make: "Mahindra",
      model: "Treo Zor",
      description: "Top class electric cargo 3 wheelers",
      certifiedRange: 125,
      range: 85, // in km
      torque: 42,
      topSpeed: 50,
      pickup: "-",
      power: 8,
      battery: {
        capacity: 7.37, // in kw
        price: 50000, // in Rs
        years: 3,
        distance: 0,
        dod: 0.85,
      },
    },
    {
      make: "Kinetic",
      model: "Safar Jumbo",
      description: "Electric cargo 3 wheelers",
      certifiedRange: 120,
      range: 85, // in km
      torque: 42,
      topSpeed: 55,
      pickup: "-",
      power: 6,
      battery: {
        capacity: 8.2, // in kw
        price: 50000, // in Rs
        years: 3,
        distance: 0,
        dod: 0.85,
      },
    },
  ],

  fourWheelers: [
    {
      make: "Tata",
      model: "Nexon",
      description: "A mid size SUV from the Indian automaker Tata Motors",
      certifiedRange: 312,
      range: 200, // in km
      topSpeed: 120,
      pickup: "0-100 in 10 seconds",
      torque: 245,
      power: 95,
      battery: {
        capacity: 30.2, // in kw
        price: 450000, // in Rs
        years: 8,
        distance: 160000,
        dod: 0.85,
      },
    },
    {
      make: "MG Motors",
      model: "ZS EV",
      description: "A compact SUV from the chinese automake",
      certifiedRange: 419,
      range: 340, // in km
      topSpeed: 140,
      pickup: "0-100 in 8.5 seconds",
      torque: 353,
      power: 105,
      battery: {
        capacity: 44.5, // in kw
        price: 700000, // in Rs
        years: 5,
        distance: 150000,
        dod: 0.85,
      },
    },
    {
      make: "Hyundai",
      model: "Kona",
      description:
        "Versatile and powerful, the KONA Electric is an All-Electric compact SUV",
      certifiedRange: 452,
      range: 300, // in km
      topSpeed: 167,
      pickup: "0-100 in 9.7 seconds",
      torque: 395,
      power: 100,
      battery: {
        capacity: 39.2, // in kw
        price: 700000, // in Rs
        years: 8,
        distance: 160000,
        dod: 0.85,
      },
    },
  ],
};

export default EvsInMarket;
