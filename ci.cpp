#include <iostream>
#include <vector>
#include <Cmath>
using namespace std;

int main()
{
    float c_i, p, t, r;
    cout << "enter value for p" << endl;
    cin >> p ;
    cout << "enter value for r: " << endl;
    cin >> r;
    cout << "enter value for t: " << endl;
    cin >> t;
    c_i = p * pow(1 + r / 100, t) * p;
    cout << c_i;
    return 0;
}