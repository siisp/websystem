#include "Researcher.h"
#include <string>
#include "IdGenerator.h"
#include "Entity.h"

using std::string;

Researcher::Researcher() {
	IdGenerator *generator= new IdGenerator();
	this->id=generator->GetNewId();
	delete generator;
}

void Researcher::SetName(string name){
	this->name=name;
}
string Researcher::GetName()const{
	return this->name;
}
void Researcher::SetSurname(string surname){
	this->surname=surname;
}
string Researcher::GetSurname()const{
	return this->surname;
}
void Researcher::SetBirthday(string birthday){
	this->birthday=birthday;
}
string Researcher::GetBirthday()const{
	return this->birthday;
}
void Researcher::SetCuilCuit(string cuilCuit){
	this->cuilCuit=cuilCuit;
}
string Researcher::GetCuilCuit()const{
	return this->cuilCuit;
}
void Researcher::SetDni(string dni){
	this->dni=dni;
}
string Researcher::GetDni()const{
	return this->dni;
}
void Researcher::SetEmail(string email){
	this->email=email;
}
string Researcher::GetEmail()const{
	return this->email;
}
void Researcher::SetGender(string gender){
	this->gender=gender;
}
string Researcher::GetGender()const{
	return this->gender;
}

string Researcher::ToJson(){
	string json= "\"" + GetId() + "\": {  \"birthday\" : \"" + GetBirthday() + "\" , \"cuilCuit\" : \"" +  GetCuilCuit() + "\", \"dni\" : "+ GetDni() + ", \"email\" : \"" +GetEmail()+ "\", \"gender\" : \""+GetGender( )+ "\", \"id\" : \""+GetId()+ "\", \"name\" : \""+GetName()+"\", \"surname\" : \""+GetSurname()+"\"}";
	return json;
}

Researcher::~Researcher() {
}

