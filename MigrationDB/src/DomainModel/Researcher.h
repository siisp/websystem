#ifndef RESEARCHER_H_
#define RESEARCHER_H_

#include <string>
#include "Entity.h"

using std::string;

class Researcher: public Entity {
private:
	string name;
	string surname;
	string birthday;
	string cuilCuit;
	string dni;
	string email;
	string gender;
public:
	Researcher();
	void SetName(string name);
	string GetName()const;
	void SetSurname(string surname);
	string GetSurname()const;
	void SetBirthday(string birthday);
	string GetBirthday()const;
	void SetCuilCuit(string cuilCuit);
	string GetCuilCuit()const;
	void SetDni(string dni);
	string GetDni()const;
	void SetEmail(string email);
	string GetEmail()const;
	void SetGender(string gender);
	string GetGender()const;
	string ToJson();
	virtual ~Researcher();
};

#endif
