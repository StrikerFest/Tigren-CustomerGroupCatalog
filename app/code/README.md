

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

![[Pasted image 20230405172346.png]]

Admin can see the index view of the page with the details of current available rule

![[Pasted image 20230405213235.png]]

Click new rule to create a new discount rule

![[Pasted image 20230405214855.png]]

After inserting all of the appropriate data in the field, press Save

![[Pasted image 20230405215026.png]]

The data have been inserted, now the product with the corresponding type (which in the example is BODY BAG) will be affect

Before rule creation

![[Pasted image 20230405215523.png]]

After rule creation

![[Pasted image 20230405215536.png]]

Also affected in the cart

![[Pasted image 20230405215617.png]]

#### Edit a rule

Admin can edit a rule by selecting the select drop down on the chosen rule then choose Edit

![[Pasted image 20230405215846.png]]

Change the rule then press Save

![[Pasted image 20230405215950.png]]

![[Pasted image 20230405220006.png]]

#### Delete a rule

Admin can delete a rule by selecting the select drop down on the chosen rule the choose Delete

![[Pasted image 20230405220128.png]]

A prompt will appear, choose OK

![[Pasted image 20230405220155.png]]

The rule will be deleted

![[Pasted image 20230405220216.png]]

### Customer (Guest)

#### Limited browsing

Guest customer can browse the store but won't be able to see the item price or add any item to the cart

![[Pasted image 20230405220348.png]]

![[Pasted image 20230405220415.png]]

### Customer (Signed in)

#### Full access to the store

Signed in customer can see the price and add items to cart

![[Pasted image 20230405220630.png]]

![[Pasted image 20230405220649.png]]

### View rule discount history

Customers can view discount history after they have checked out their cart

![[Pasted image 20230405220828.png]]

![[Pasted image 20230405220840.png]]

![[Pasted image 20230405221329.png]]

After enter the link, the customers can see the history of their order discount

