<center>

### AUSTIN COMMUNITY COLLEGE 
#### Web Software Bootcamp 
###### January 2019 - August 2019

</center>

# Project​ : Express.js

The​ purpose​ of​ these​ exercises​ is​ to​ gain experience​ with​ routing.​ There​ will​ no​ CSS
or​ styling.​ We​ just​ want​ to​ focus​ on​ getting our​ routes​ working​ properly.

### Task​ #1​ : 

Create​ an​ application​ with​ Express.​ It​ should​ do the​ following:

When​ you​ go​ to​ `http://localhost:3000/`,​ it​ should​ say​ 

```
Welcome to​ the​ Fruit​ home​ page!
```

When​ you​ go​ to​ `http://localhost:3000/banana`,​ it​ should​ say​ 
```
I’m going​ bananas!
```

When​ you​ go​ to​ `http://localhost:3000/kiwi`,​ it​ should​ say​ 
```
Kiwis are​ great.​ But​ I don’t​ like​ how​ hairy​ they​ are.
```

When​ you​ go​ to​ `http://localhost:3000/strawberry`,​ it​ should​ say

```
Strawberries​ are​ nature's​ perfect​ fruit.
```

  Hint:​ follow​ the​ documentation​ on​ the​ 
  Express​ Getting Started [https://expressjs.com/en/starter/hello-world.html] 
  page.​ You​ will​ want​ to​ use​ `res.send`​​ to​ complete​ this task.

### Task​ #2​ : 

This​ task​ is​ designed​ to​ help​ you​ gain​ some
experience​ with​ using​ the​ package.json​ file.​ Review​ the
documentation​ for​ package.json​ here:
https://docs.npmjs.com/getting-started/using-a-package.json

Create​ an​ empty​ folder​ and​ cd​ into​ it​ in your​ terminal.​ Run
`npm​ init`.​ It​ will​ ask​ you​ to​ fill​ in​ some​ data​ regarding​ your
application.​ Be​ familiar​ with​ what​ each​ field​ requires​ and
what​ they​ mean.

Repeat​ the​ same​ process​ by​ creating​ another​ blank​ folder,
and​ running​ “npm​ init”​ again.

### Task​ #3​ : 

This​ task​ is​ designed​ to​ get​ you​ thinking​ about
how​ to​ work​ with​ route​ parameters.​ Use​ router​ parameters
to​ solve​ this​ this​ task.

Create​ an​ application​ with​ Express.​ It​ should​ do​ the
following:

When​ you​ type​ into​ the​ browser

```
http://localhost:3000/fruit/​some​-fruit​-name
```

it​ should​ display​ a
message​ on​ the​ web​ page​ that​ says,​ 

```
So,​ I take​ it​ your favorite​ fruit​ is​ some​-fruit​-name​?
```

For​ example,​ when​ you​ type​ in​ the​ url `http://localhost:3000/fruit/banana`,​ there​ 
should​ be​ a message on​ the​ page​ that​ says​ 

```
So,​ I take​ it​ your​ favorite​ fruit​ is banana?
```

Basically,​ whatever​ fruit​ is entered​ into​ the​ last​ part​ of​ the​ url​ gets​ displayed​ on​ the
page.

Here​ are​ some​ examples:

    http://i.imgtc.com/i/f2dhnK8.png
    http://i.imgtc.com/i/7N7GEXI.png

### Task #4 : 

Next,​ in​ the​ same​ file,​ create​ a route​ that​ looks​ like​ this:

```
http://localhost:3000/bankaccount/some​-persons​-name​/a-number​
```

When​ you​ type​ this​ url​ into​ the​ browser,​ if​ the​ number​ is
greater​ than​ or​ equal​ to​ 50,​ a message​ should​ display​ on
the​ page​ that​ says​ 

```
So,​ some-persons-name,​ I understand​ you​ have​ $(a-number​) in​ your​ bank​ account.
Can​ you​ loan​ me​ some​ money?
```

If​ the​ number​ is​ less​ than​ 50,​ the​ message​ on​ the​ page
should​ display:​ 

```
(​some​-persons​-name​),​ do​ you​ enjoy​ living life​ dangerously​ on​ the​ edge?
```

Here​ are​ some​ examples:

    http://i.imgtc.com/i/2NKLZ5A.png
    http://i.imgtc.com/i/edwn5t8.png