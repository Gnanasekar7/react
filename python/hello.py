# import math
# age=5
# print (age)

# val1=10/3
# print(val1)

# val2=math.floor(val1)
# print (val2) 

# poem ="""Here are grammar debates that never die; 
# and the ones highlighted in the questions
# in this quiz are sure to rile everyone up once again.
# Do you know how to answer the questions 
# that cause some of the greatest grammar debates?"""
# print (poem)

# word="Where am i?"
# print(word[1:])
# print(word[:2])
# print(word[0:5])

# list
# age =[14,34,66]

# favourites=["cricket","u tube",["netflix","amazon"]]
# print(age)
# print (favourites[2])

# copy

# shallow copy

# favourites=["cricket","u tube",["netflix","amazon"]]
# copy=favourites[:]
# copy[2][0]="hello"
# print(copy)
# print(favourites)

# deep copy

# import copy
# favourites=["cricket","u tube",["netflix","amazon"]]
# c=copy.deepcopy(favourites)
# print (id(favourites))
# print (id(c[2]))
# c[2][0]="hello"
# print(c)
# print(favourites)

# control flow

# print("what is ur age?")
# age=int(input())
# if age<20:
#     print("hello, teenager")
# elif age>20:
#     print("welcome to 'ty's'") 
# elif age>50:
#     print('hey senior citizen')   

# print("what is ur age?")
# age=int(input())
# if age<20:
#     print("hello, teenager")
# elif age>50:
#     print('hey senior citizen')   
# elif age>20:
#     print("welcome to 'ty's'") 

# loops

languages=["c++","java","python","javascript"]

print("what are you searching for?")
lang=str(input())

for language in languages:
    if lang == language:
        print(language,"......hurray there u go")
    else:    
        print(language,"......not that u are looking for")

# pattern 

# for i in range(6):
#     for j in range(i):
#         print('* ' ,end="")
#     print()
    

# print ("printing with process:")
# i=10
# print("individual summation upto ",i)
# while i>-1:
#     total=0
#     j=i
#     while j>0:
#         if j>1:
#             print(j,"+",end=" ")
#         else:
#             print(j,"=",end=" ")  
#         total+=j      
#         j-=1
#     print(total)
#     i-=1
