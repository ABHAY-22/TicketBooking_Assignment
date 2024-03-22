![download](https://github.com/ABHAY-22/TicketBooking_Assignment/assets/51116785/2c40477d-79dd-4076-bfcc-4cee772a7b6e)# TicketBooking_Assignment


Backeend link --

https://ticketbooking-assignment2.onrender.com/

POST
/api/register
This endpoint should allow users to register. Hash the password on store

![image](https://github.com/ABHAY-22/TicketBooking_Assignment/assets/51116785/7116f765-0cd3-47e1-883b-250b19526120)


POST
/api/login
This endpoint should allow users to login. Return JWT token on successful login.


![image](https://github.com/ABHAY-22/TicketBooking_Assignment/assets/51116785/cb8146cd-804c-4b0d-bb30-b48775bfd520)



GET
/api/flights
This endpoint should return a list of all available flights.

![image](https://github.com/ABHAY-22/TicketBooking_Assignment/assets/51116785/941ace23-2a29-49c0-8e36-8d4b1e714f17)


GET
/api/flights/:id
This endpoint should return the details of a specific flight identified by its ID.

![image](https://github.com/ABHAY-22/TicketBooking_Assignment/assets/51116785/1c77b89d-b9ce-4837-841f-ae2d8abebcf5)


POST
/api/flights
This endpoint should allow users to add new flights to the system. (Protected Route)

![image](https://github.com/ABHAY-22/TicketBooking_Assignment/assets/51116785/7a1f08cf-e2ac-4551-ab96-20ba4b38d505)


PUT / PATCH
/api/flights/:id
This endpoint should allow users to update the details of a specific flight identified by its ID. (Protected Route)

![image](https://github.com/ABHAY-22/TicketBooking_Assignment/assets/51116785/e6ef7515-d641-499c-b236-8cbe2862ea4d)


DELETE
/api/flights/:id
This endpoint should allow users to delete a specific flight identified by its ID. (Protected Route)

![image](https://github.com/ABHAY-22/TicketBooking_Assignment/assets/51116785/ee72318c-13e9-452a-8bc8-2e3da589e7dd)


POST
/api/booking
This endpoint should allow the user to book flights. (Protected Route)



GET
/api/dashboard
This point should list all the bookings so far with the user and flight details. (Populate the entire flight and user data, and not just id’s) (Protected Route)

PUT/PATCH
/api/dashboard/:id


This endpoint should allow the user to edit / update a booking. (Protected Route)
204
DELETE

/api/dashboard/:id
This endpoint should allow the user to delete a booking (Protected Route)

