################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
../src/ParserCSV/FormationData.cpp \
../src/ParserCSV/PersonalData.cpp \
../src/ParserCSV/PositionData.cpp \
../src/ParserCSV/Record.cpp \
../src/ParserCSV/RecordsLoader.cpp \
../src/ParserCSV/ResearcherData.cpp 

OBJS += \
./src/ParserCSV/FormationData.o \
./src/ParserCSV/PersonalData.o \
./src/ParserCSV/PositionData.o \
./src/ParserCSV/Record.o \
./src/ParserCSV/RecordsLoader.o \
./src/ParserCSV/ResearcherData.o 

CPP_DEPS += \
./src/ParserCSV/FormationData.d \
./src/ParserCSV/PersonalData.d \
./src/ParserCSV/PositionData.d \
./src/ParserCSV/Record.d \
./src/ParserCSV/RecordsLoader.d \
./src/ParserCSV/ResearcherData.d 


# Each subdirectory must supply rules for building sources it contributes
src/ParserCSV/%.o: ../src/ParserCSV/%.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: GCC C++ Compiler'
	g++ -O0 -g3 -Wall -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@:%.o=%.d)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


