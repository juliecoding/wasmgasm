#include <cstdlib>
#include <ctime>
#include <iostream>

using namespace std;

int main() {
  srand((unsigned)time(0));
  int random_integer;
  random_integer = (rand()%256)+1;
  cout << random_integer << endl;
}
