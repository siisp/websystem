#ifndef RESEARCHERDATA_H_
#define RESEARCHERDATA_H_

#include "FormationData.h"
#include "PersonalData.h"
#include "PositionData.h"

class ResearcherData {
private:
	FormationData* formationData;
	PersonalData* personalData;
	PositionData* positionData;
public:
	ResearcherData();
	FormationData* getFormationData() const;
	void setFormationData(FormationData* formationData);
	PersonalData* getPersonalData() const;
	void setPersonalData(PersonalData* personalData);
	PositionData* getPositionData() const;
	void setPositionData(PositionData* positionData);
	virtual ~ResearcherData();
};

#endif
