-- Sample fleet for the booking catalogue. Photos are bundled with the frontend.
INSERT INTO easycarrental.car (
    carId, registrationNo, brand, colour, type, fuelType, transmissionType,
    noOfPassengers, dailyRatePrice, monthlyRatePrice, freeKmForDay, freeKmForMonth,
    pricePerExtraKM, totalDistanceTraveled, availableOrNot, damageOrNot,
    underMaintainOrNot, fontViewImage
)
SELECT fleet.carId, fleet.registrationNo, fleet.brand, fleet.colour, fleet.type,
       fleet.fuelType, 'Auto', fleet.seats, fleet.dailyRate, fleet.monthlyRate,
       100, 2500, fleet.extraKmRate, fleet.odometer, 'Available', 'Not Damage',
       'Maintained', CONCAT('assets/images/car_bg_home/', fleet.photo)
FROM (
    SELECT 'V00-0001' AS carId, 'R00-0001' AS registrationNo, 'Toyota RAV4' AS brand,
           'Blue' AS colour, 'Premium' AS type, 'Petrol' AS fuelType, 5 AS seats,
           12500 AS dailyRate, 250000 AS monthlyRate, 95 AS extraKmRate,
           28400 AS odometer, 'car-1.jpg' AS photo
    UNION ALL SELECT 'V00-0002', 'R00-0002', 'BMW 3 Series', 'Black', 'Premium', 'Diesel', 5, 16000, 320000, 120, 35600, 'car-2.jpg'
    UNION ALL SELECT 'V00-0003', 'R00-0003', 'Volkswagen Polo', 'White', 'General', 'Petrol', 5, 7500, 150000, 65, 21900, 'car-3.jpg'
    UNION ALL SELECT 'V00-0004', 'R00-0004', 'Cadillac Escalade', 'Black', 'Luxury', 'Petrol', 7, 32000, 640000, 180, 31200, 'car-4.jpg'
    UNION ALL SELECT 'V00-0005', 'R00-0005', 'BMW M4', 'Red', 'Luxury', 'Petrol', 4, 26000, 520000, 150, 18400, 'car-5.jpg'
    UNION ALL SELECT 'V00-0006', 'R00-0006', 'BMW 4 Series', 'Silver', 'Luxury', 'Petrol', 5, 19500, 390000, 135, 26800, 'car-6.jpg'
) AS fleet
WHERE NOT EXISTS (
    SELECT 1 FROM easycarrental.car AS existing
    WHERE existing.carId = fleet.carId OR existing.registrationNo = fleet.registrationNo
);
