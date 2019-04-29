<center>

### AUSTIN COMMUNITY COLLEGE 
#### Web Software Bootcamp 
##### January 2019 - August 2019

</center>

# LEARNING GOALS

For the next two weeks, we will be learning relational databases and working with SQL.

## Self Learning Resources

1. [Youtube Learn Postgres for Beginners](https://www.youtube.com/playlist?list=PL-osiE80TeTsKOdPrKeSOp4rN3mza8VHN)

1. [W3Schools SQL tutorial](https://www.w3schools.com/sql/)

1. [SQL Tutorial on Khan Academy](https://www.khanacademy.org/computing/computer-programming/sql)


## Projects List

SQL is best learnt by practice.  Learning concepts from secondary sources is necessary to start, but to grasp the underlying concepts you must write the queries and check the output of those, while fine tuning the results until you can get exactly what you are looking for (or asked for).

Try the following questions on the database provided above and add the queries to a file in your github repository.

#### Proj 1:

1. Please find all employees that have a salary greater than 3000 and less than 4000
- using AND operator
- using BETWEEN operator

#### Proj 2:

1. List the employees whose last name is longer than 6 characters.  
2. In this query, return the first 6 characters of their last names, the jobs they perform and their salary.

**Hint:** find appropriate string functions that would help you get this done.

#### Proj 3:

1. Please find all employees that have a salary greater than 8000, and those hired after 1996 (use implicit conversion of a date as a string to the DATE type).  
2. Create a separate query to find the lowest salary in the company (look for a SQL math function from references or Google search which allows you find the minimum in a set or a column).
3. In the first query you wrote above, please also report the employee's total compensation (salary + commission, if any) as a percentage of the minimum salary in the company from the #2 above.

#### Proj 4: 

  List the full names and their department names of the all employees in the "bootcamp" database.  Do the same for the employees
  that work for department "Sales".  Order the results by hiring date with the most recent hires at the top.
  
  Hint: you may NOT look up the department_id of "Sales", but use the text "Sales" in the query.  Do something like `... WHERE department_name = 'Sales'`  
  
  Only commit the SQL in a text file to the repo on github.
  
  What you would expect to see is

```
         Full Name     |    Department    
    -------------------+------------------
     Lex De Haan       | Executive
     Susan Mavris      | Human Resources
     William Gietz     | Accounting
     Hermann Baer      | Public Relations
     Shelley Higgins   | Accounting
     Daniel Faviet     | Finance
     ...
 ```
 
 #### Proj 5: 
 
   List the first, last, email, department name and city of all employees that are Execs.
   
   Hint: Join between EMPLOYEES, DEPARTMENTS and LOCATIONS using DEPARTMENT_NAME = 'appropriate department name'.
   
   What you would expect to see is
   ```
   FIRST      LAST       EMAIL      DEPT       CITY
   ---------- ---------- ---------- ---------- ------------
   Steven     King       SKING      Executive  Seattle
   Neena      Kochhar    NKOCHHAR   Executive  Seattle
   Lex        De Haan    LDEHAAN    Executive  Seattle
   Seely      Bruce      bman       Executive  Seattle
   Stephen    Noyce      snoyce     Executive  Seattle
   ...
   ```

#### Proj 6: 

  To the above query, add the manager's first name to the column list.
  
  Hint: add a self join to the EMPLOYEES table all over again giving it a different alias.   
  
  Make changes so that all 107 employees are listed (for this requirement, think about using outer joins.  You may wait till we have covered outer joins in class.)  
  
  What you would expect to see is
  
  ```
  FIRST      LAST       EMAIL      MANAGER    DEPT       CITY
  ---------- ---------- ---------- ---------- ---------- ----------
  Neena      Kochhar    nkocchar   Steven     Executive  Seattle
  Lex        De Haan    ldehaan    Steven     Executive  Seattle
  Seely      Bruce      bman       Steven     Executive  Seattle
  Stephen    Noyce      snoyce     Steven     Executive  Seattle
  ...
  ```


#### Proj 7: 

  Find out how many employees were hired in each year.  List years and counts of employees hired in those years.  See sample output below.  
  
  Hint: use grouping after extracting the year of hire.
  
  Then leave out those who years where less than 5 employees were hired, while ordering the results chronologically.
    
  ```
     year_of_hiring | count 
    ----------------+-------
               2009 |     7
               2010 |     6
               2011 |    10
               2012 |    29
               2013 |    24
               2014 |    19
               2015 |    11
    (7 rows)
  ```
