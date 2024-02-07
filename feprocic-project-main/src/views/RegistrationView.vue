<template>
  <v-container class="pl-16 pr-16">
    <v-card class="pa-6">
      <p class="text-h4 mb-6 centered">Pré-Matricula</p>
      <v-form ref="form" v-model="valid" lazy-validation class="mt-7">
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="registrationEntity.name"
              label="Nome Completo *"
              :rules="nameRules"
              :counter="100"
              outlined
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="registrationEntity.socialName"
              label="Nome Social"
              hint="Transexuais ou Travestis"
              :counter="100"
              outlined
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-dialog
              ref="dialog"
              v-model="modal"
              :return-value.sync="date"
              width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="formattedBirthDate"
                  label="Data de Nascimento *"
                  readonly
                  v-bind="attrs"
                  v-on="on"
                  :rules="birthDateRules"
                  outlined
                ></v-text-field>
              </template>
              <v-date-picker v-model="registrationEntity.birthDate" scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="$refs.dialog.reset()">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.dialog.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-dialog>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              v-model="registrationEntity.age"
              label="Idade *"
              :rules="ageRules"
              outlined
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              v-model="registrationEntity.email"
              :rules="emailRules"
              label="E-mail *"
              outlined
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-select
              v-model="registrationEntity.deficient"
              :rules="deficientRules"
              :items="yesOrNo"
              label="Aluno com deficiência *"
              outlined
            ></v-select>
          </v-col>
          <v-col cols="12" sm="3">
            <v-select
              :disabled="registrationEntity.deficient !== 'Sim'"
              v-model="registrationEntity.deficienciesType"
              :rules="deficiencieTypeRules"
              :items="deficienciesType"
              label="Qual deficiência"
              outlined
            ></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="3">
            <v-select
              v-model="registrationEntity.race"
              :rules="raceRules"
              :items="race"
              label="Raça *"
              outlined
            ></v-select>
          </v-col>
          <v-col cols="12" sm="3">
            <v-select
              v-model="registrationEntity.gender"
              :items="gender"
              label="Gênero do Aluno *"
              :rules="genderRules"
              outlined
            ></v-select>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              v-model="registrationEntity.rg"
              label="RG *"
              v-mask="'##.###.###-#'"
              :rules="rgRules"
              outlined
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="3">
            <v-text-field
              v-model="registrationEntity.cpf"
              label="CPF *"
              v-mask="'###.###.###-##'"
              :rules="cpfRules"
              outlined
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="registrationEntity.address"
              label="Endereço *"
              :rules="addressRules"
              outlined
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="registrationEntity.neighborhood"
              label="Bairro *"
              :rules="neighborhoodRules"
              outlined
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="registrationEntity.city"
              label="Cidade *"
              :rules="cityRules"
              outlined
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="registrationEntity.cep"
              label="CEP *"
              :rules="cepRules"
              v-mask="'#####-###'"
              outlined
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="8">
            <v-text-field
              v-model="registrationEntity.motherName"
              label="Nome da Mãe *"
              :rules="motherNameRules"
              outlined
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="registrationEntity.phoneOne"
              label="Telefone 1 *"
              :rules="phoneRules"
              outlined
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" sm="8">
            <v-text-field
              v-model="registrationEntity.fatherName"
              label="Nome do Pai *"
              :rules="fatherNameRules"
              outlined
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="4">
            <v-text-field
              v-model="registrationEntity.phoneTwo"
              label="Telefone 2 *"
              :rules="phoneRules"
              outlined
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col class="mt-n10 mb-n3">
            <v-radio-group
              v-model="registrationEntity.school"
              row
              :rules="schoolRules"
            >
              <v-col cols="12" sm="8">
                <v-subtitle>
                  Escola onde concluiu ou está cursando o 9° ano
                </v-subtitle>
              </v-col>
              <v-col cols="12" sm="2">
                <v-radio label="Publica" value="public"></v-radio>
              </v-col>
              <v-col cols="12" sm="2">
                <v-radio label="Particular" value="particular"></v-radio>
              </v-col>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="registrationEntity.schoolName"
              label="Nome da escola *"
              :rules="schoolNameRules"
              outlined
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="8"> </v-col>
          <v-col cols="12" sm="2">
            <v-btn color="error" @click="reset"> Cancelar </v-btn>
          </v-col>
          <v-col cols="12" sm="2">
            <v-btn :disabled="!valid" color="success" @click="validate">
              Enviar
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    modal: false,
    valid: true,

    nameRules: [
      (v) => !!v || "Nome é obrigatório",
      (v) => (v && v.length <= 100) || "Nome deve ter no máximo 100 characters",
    ],
    cpfRules: [(v) => (v && v.length > 13) || "CPF incompleto"],
    rgRules: [(v) => (v && v.length > 11) || "RG incompleto"],
    emailRules: [
      (v) => !!v || "E-mail é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "E-mail é invalido",
    ],
    genderRules: [(v) => !!v || "Por favor, selecione o gênero do aluno"],
    raceRules: [(v) => !!v || "Por favor, selecione o gênero do aluno"],
    deficientRules: [
      (v) => !!v || "Por favor, selecione se o aluno é deficiente ou não",
    ],
    birthDateRules: [(v) => !!v || "Data de Nascimento é obrigatório"],
    schoolNameRules: [(v) => !!v || "Nome da escola é obrigatório"],
    addressRules: [(v) => !!v || "Endereço é obrigatório"],
    neighborhoodRules: [(v) => !!v || "Bairro é obrigatório"],
    cityRules: [(v) => !!v || "Cidade é obrigatório"],
    cepRules: [(v) => (v && v.length > 7) || "CEP incompleto"],
    motherNameRules: [(v) => !!v || "Nome da mãe é obrigatório"],
    fatherNameRules: [(v) => !!v || "Nome do pai é obrigatório"],
    phoneRules: [(v) => !!v || "Telefone é obrigatório"],

    yesOrNo: ["Sim", "Não"],
    deficienciesType: [
      "Deficiência Visual",
      "Deficiência Auditiva",
      "Deficiência Física",
      "Deficiência Intelectual",
      "Deficiência Aprendizado",
      "Deficiência Psicossocial ou Mental",
      "Deficiência de Fala",
    ],
    gender: ["Masculino", "Feminino", "Outro"],
    race: ["Negra", "Branca", "Amarela", "Parda", "Indígena", "Mestiça"],

    registrationEntity: {
      name: "",
      socialName: "",
      email: "",
      birthDate: "",
      cpf: "",
      rg: "",
      age: "",
      gender: "",
      race: "",
      deficient: "",
      deficienciesType: "",
      address: "",
      neighborhood: "",
      cep: "",
      city: "",
      school: null,
      schoolName: "",
      phoneOne: "",
      phoneTwo: "",
    },
  }),
  computed: {
    deficiencieTypeRules() {
      return this.registrationEntity.deficient === "Sim"
        ? [(v) => !!v || "Por favor, selecione uma opção"]
        : [];
    },
    schoolRules() {
      return this.registrationEntity.school === null ? [(v) => !!v || ""] : [];
    },
    ageRules() {
      return this.registrationEntity.birthDate !== ""
        ? [
            (v) =>
              this.validateAge(v) ||
              "A idade não corresponde à data de nascimento",
          ]
        : [];
    },
    formattedBirthDate() {
      return this.registrationEntity.birthDate
        ? this.formatDate(this.registrationEntity.birthDate)
        : null;
    },
  },

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    formattedRg() {
      this.registrationEntity.rg = this.rg.replace(/\D/g, "");
    },
    formattedCpf() {
      this.registrationEntity.cpf = this.cpf.replace(/\D/g, "");
    },
    formattedCep() {
      this.registrationEntity.cep = this.cep.replace(/\D/g, "");
    },
    validateAge(age) {
      const birthYear = this.registrationEntity.birthDate
        ? new Date(this.registrationEntity.birthDate).getFullYear()
        : null;
      const currentYear = new Date().getFullYear();

      return (
        !isNaN(age) && birthYear && currentYear - birthYear === parseInt(age)
      );
    },
    formatDate(date) {
      const d = new Date(date);
      const day = d.getDate() + 1;
      const month = d.getMonth() + 1;
      const year = d.getFullYear();

      return `${day < 10 ? "0" : ""}${day}/${
        month < 10 ? "0" : ""
      }${month}/${year}`;
    },
  },
};
</script>
<style scoped>
.centered {
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.5s;
}
</style>
