#include "Parametric.h"
#include <string>

using std::string;

Parametric::Parametric(){
}
string Parametric::GetId()const{
	return this->id;
}
void Parametric::SetId(string id){
	this->id=id;
}
string Parametric::GetName()const{
	return this->name;
}
void Parametric::SetName(string name){
	this->name=name;
}
Parametric::~Parametric() {
}

