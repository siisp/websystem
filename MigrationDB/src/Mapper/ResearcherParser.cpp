#include "ResearcherParser.h"
#include "../DomainModel/Researcher.h"
#include "../ParserCSV/ResearcherData.h"
#include <vector>
#include "DataMapper.h"

ResearcherParser::ResearcherParser() {
}

Researcher* ResearcherParser::Parse(const ResearcherData* researcherData){
	Researcher* newResearcher = new Researcher();
	for(int i=0;i<this->dataMappers.size();i++){
		this->dataMappers[i]->Map(researcherData,newResearcher);
	}
	return newResearcher;
}

ResearcherParser::~ResearcherParser() {
}

