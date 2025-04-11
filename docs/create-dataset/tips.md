---
title: Tips for Dataset Creator
---



## Design Data Structure with user in mind

Think about what your dataset can do, and design data structure so your user may benefit.

## Choose readable column names

Choose clear, meaningful column names for better usability.
Examples of Readable Column Names
	1.	Be descriptive, not cryptic
	    *	✅ user_id
	    *	❌ uid
	2.	Avoid unnecessary abbreviations
	    *	✅ purchase_date
	    *	❌ p_date
	3.	Use sensible casing
	    *	✅ order_total or OrderTotal
	    *	❌ ordertotal
	4.	Be specific when possible
	    *	✅ signup_timestamp
	    *	❌ timestamp

Readable column names make datasets self-explanatory, reducing the need for excessive documentation.
## Document your datasets

You should document your datasets for your users and your future self.

It's good to mention:
	* Purpose: What is this dataset for?
	* Creation: How was it made? (crawled? synthetic? crowdsourced? collected log data?)
	* Metrics: Provide useful stats.
    	* Size
    	* For **synthetic** data, how good is the quality?
    	* For **crowdsourced** data, how good is the quality (i.e. how clear is your communication to annotator)?
	* Maintenance: Plan updates or fixes for future versions if needed.

## Typing

Typing is optional but highly encouraged. As a dataset publisher, this small inconvinence can benefit your future users:


* Serves as documentation.
* allow us to auto generate code in multiple languages for your future users.
We created `easytype` for type annotation, read more about it here -> [**easytype**](/docs/create-dataset/typing)