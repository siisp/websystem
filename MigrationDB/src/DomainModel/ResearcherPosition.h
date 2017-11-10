#ifndef RESEARCHERPOSITION_H_
#define RESEARCHERPOSITION_H_

#include <string>
#include "Entity.h"

using std::string;

class ResearcherPosition: public Entity {
private:
	string career;
	string idDedication;
	string license;
	string modality;
	string positionType;
	string secretaryshipDepartment;
	string subject;
public:
	ResearcherPosition();
	string getCareer() const;
	void setCareer(string career);
	string getIdDedication() const;
	void setIdDedication(string idDedication);
	string getLicense() const;
	void setLicense(string license);
	string getModality() const;
	void setModality(string modality);
	string getPositionType() const;
	void setPositionType(string positionType);
	string getSecretaryshipDepartment() const;
	void setSecretaryshipDepartment(string secretaryshipDepartment);
	string getSubject() const;
	void setSubject(string subject);
	virtual ~ResearcherPosition();
};

#endif
