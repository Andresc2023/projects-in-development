#include<iostream>
#include<conio.h>
using namespace std;
int main()
{
    system("cls");          //Its an funct. to clear the screen
    string name,a;          //string is a keyword for decraling the only string variable
    cout<<"* What is your name ? "<<"\n  ";     
    cin>>name;              /* cin here is used for taking input and assingning it in 'name' variable */
    cout<<"  - Hii "<<name<<endl;       /* you can see there is variable of name in this
                                           line after 'Hii' and the name variable which 
                                           simply gonna pring the string which we had 
                                           already entered*/ 
    
    cout<<"\n* So hows your day going? "<<"\n  ";
    cin>>a;                 //taking input and assingning it in 'a' variable
    cout<<"  - Ohh that's good !";
    getch();
    
        cout<<"* What are you doing today.? "<<"\n  ";     
    cin>>name;              /* cin here is used for taking input and assingning it in 'name' variable */
    cout<<"  - very well "<<name<<endl;       /* you can see there is variable of name in this
                                           line after 'Hii' and the name variable which 
                                           simply gonna pring the string which we had 
                                           already entered*/ 
    
    cout<<"\n* Is at your home ? "<<"\n  ";
    cin>>a;                 //taking input and assingning it in 'a' variable
    cout<<"  - Ohh that's nice !";
    getch();
    return 0;
}
