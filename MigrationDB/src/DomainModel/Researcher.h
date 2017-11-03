#ifndef RESEARCHER_H_
#define RESEARCHER_H_

#include <string>

using std::string;

class Researcher {
private:
	string name;
	string surname;
	string birthday;
	string cuilCuit;
	int dni;
	string email;
	string gender;
	string id;
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
	void SetDni(int dni);
	int GetDni()const;
	void SetEmail(string email);
	string GetEmail()const;
	void SetGender(string gender);
	string GetGender()const;
	string GetId()const;

	virtual ~Researcher();
};

#endif
