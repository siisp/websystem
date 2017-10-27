################################################################################
# Automatically-generated file. Do not edit!
################################################################################

# Add inputs and outputs from these tool invocations to the build variables 
CPP_SRCS += \
../src/DomainModel/Researcher.cpp 

OBJS += \
./src/DomainModel/Researcher.o 

CPP_DEPS += \
./src/DomainModel/Researcher.d 


# Each subdirectory must supply rules for building sources it contributes
src/DomainModel/%.o: ../src/DomainModel/%.cpp
	@echo 'Building file: $<'
	@echo 'Invoking: GCC C++ Compiler'
	g++ -O0 -g3 -Wall -c -fmessage-length=0 -MMD -MP -MF"$(@:%.o=%.d)" -MT"$(@:%.o=%.d)" -o "$@" "$<"
	@echo 'Finished building: $<'
	@echo ' '


