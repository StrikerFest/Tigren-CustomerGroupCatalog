

## Objective
Create a discount rule to apply to the product price directly based on store view, customer group and product type for the customer

Admin are allowed to perform CRUD operation to the rules

Customers can see the price change based on the rule applied 
Customers can view the rule discount information in customer group catalog history page

The module require 5 following tables, including 2 main tables and 3 compound tables

- Tigren_rule (rule_id, name, discount_amount, start_time, end_time, priority, active)
	- Discount amount determines the price reduction in percentage of the original price
	- Start time and end time determine the active time for the rule
	- Priority determines the priority of the rule chosen when multiple rules are valid, the rule with the highest priority will be selected
	- Active decides whether the rule can be use or not ( 0 for disabled - 1 for enabled)

- Tigren_store (rule_id, store_id)
	- This table stores all the store that was asigned to one rule
	- One rule can have multiple store
	- One store can be belong to many rule

- Tigren_customer_group (rule_id, customerGroup_id)
	- This table stores all the customer group that was asigned to one rule
	- One rule can have multiple customer group
	- One customer group can be belong to many rule

- Tigren_product (rule_id, product_id)
	- This table stores all the product that was asigned to one rule
	- One rule can have multiple product
	- One product can be belong to many rule

- Tigren_customer_group_catalog_history (entity_id, order_id, customer_id, rule_id)
	- Save discount information after placing order

## Target user: 
- Admin 
- Customer (Guest and signed in)

## Process flow

### Admin

#### Create a new rule 

Admin can access the rule management page at the main menu bar

![image](https://user-images.githubusercontent.com/72716233/230127443-2a5bc4de-bd05-48be-8f46-6b0a14451f80.png)

Admin can see the index view of the page with the details of current available rule

![image](https://user-images.githubusercontent.com/72716233/230127545-c0e8704c-7b89-4753-b047-9543216e4822.png)

Click new rule to create a new discount rule

![image](https://user-images.githubusercontent.com/72716233/230127612-2ef2de9f-151a-41fd-8b01-7984f0c157c1.png)

After inserting all of the appropriate data in the field, press Save

![image](https://user-images.githubusercontent.com/72716233/230127669-0481ba22-fc2e-4c78-a638-3bcf85580d54.png)

The data have been inserted, now the product with the corresponding type (which in the example is BODY BAG) will be affect

Before rule creation

![image](https://user-images.githubusercontent.com/72716233/230127747-e4f15a89-5c0a-40f3-ab5f-05db0bf01ea4.png)

After rule creation

![image](https://user-images.githubusercontent.com/72716233/230127793-57e1793c-77ef-457a-8e54-e5139caf674b.png)

Also affected in the cart

![image](https://user-images.githubusercontent.com/72716233/230127862-f5748203-830b-469e-a2b9-cffe0091c96a.png)

#### Edit a rule

Admin can edit a rule by selecting the select drop down on the chosen rule then choose Edit

![image](https://user-images.githubusercontent.com/72716233/230127941-d95405fb-e79f-48e0-bcea-448ec82d3af9.png)

Change the rule then press Save

![image](https://user-images.githubusercontent.com/72716233/230127991-39c98065-ea94-4ea5-8724-a05ebec1087c.png)

![image](https://user-images.githubusercontent.com/72716233/230128034-1c82fe2d-e8fe-4b74-a631-07c811b3b8f3.png)

#### Delete a rule

Admin can delete a rule by selecting the select drop down on the chosen rule the choose Delete

![image](https://user-images.githubusercontent.com/72716233/230128141-35f5126f-2dbf-4e43-a0f4-e508c587055a.png)

A prompt will appear, choose OK

![image](https://user-images.githubusercontent.com/72716233/230128197-c847095e-f6b7-4bdf-902e-4de193b92326.png)

The rule will be deleted

![image](https://user-images.githubusercontent.com/72716233/230128248-43123586-6b09-4484-a9af-cee53208a102.png)

### Customer (Guest)

#### Limited browsing

Guest customer can browse the store but won't be able to see the item price or add any item to the cart

![image](https://user-images.githubusercontent.com/72716233/230128293-330be1c5-dab2-46e2-8efd-d019ea6661f1.png)

![image](https://user-images.githubusercontent.com/72716233/230128355-7598972c-85df-449f-adf2-5b7a5c79a619.png)

### Customer (Signed in)

#### Full access to the store

Signed in customer can see the price and add items to cart

![image](https://user-images.githubusercontent.com/72716233/230128440-aab14ae4-1c54-4f81-be9e-a3d80cfdc40c.png)

![image](https://user-images.githubusercontent.com/72716233/230128481-14ef6ba3-74da-409f-9c94-b2048eeefdd1.png)

### View rule discount history

Customers can view discount history after they have checked out their cart

![image](https://user-images.githubusercontent.com/72716233/230128540-071fcbf6-fb18-4c4d-9935-09060a270c6a.png)

![image](https://user-images.githubusercontent.com/72716233/230128567-ccc4214b-5782-4a2d-a763-e2ab92dc0fd6.png)

![image](https://user-images.githubusercontent.com/72716233/230128616-720cf45e-191f-42c3-8921-e31bb7c209e5.png)

After enter the link, the customers can see the history of their order discount

