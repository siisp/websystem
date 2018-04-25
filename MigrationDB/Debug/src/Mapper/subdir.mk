################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
../src/Mapper/DataMapper.cpp \
../src/Mapper/PersonalDataMapper.cpp \
../src/Mapper/ResearcherFormationMapper.cpp \
../src/Mapper/ResearcherParser.cpp 

OBJS += \
./src/Mapper/DataMapper.o \
./src/Mapper/PersonalDataMapper.o \
./src/Mapper/ResearcherFormationMapper.o \
./src/Mapper/ResearcherParser.o 

CPP_DEPS += \
./src/Mapper/DataMapper.d \
./src/Mapper/PersonalDataMapper.d \
./src/Mapper/ResearcherFormationMapper.d \
./src/Mapper/ResearcherParser.d 


# Each subdirectory must supply rules for building sources it contributes
src/Mapper/%.o: ../src/Mapper/%.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: GCC C++ Compiler'
	g++ -O0 -g3 -Wall -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@:%.o=%.d)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


