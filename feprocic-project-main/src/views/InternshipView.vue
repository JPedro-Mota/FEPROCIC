<template>
  <v-container fluid>
    <v-row>
      <v-img class="mt-0 mb-0 ml-0 mr-0" max-height="500" src="../assets/banner-image-intership2.0.png"></v-img>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <div class="d-flex justify-center mt-8 mb-16">
          <v-text-tile>
            <v-title class="text-h6 text-md-h5 text-lg-h4 font-weight-bold">ESTÁGIO</v-title>
          </v-text-tile>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="7">
        <v-img class="image" max-height="100%" max-width="70%" src="../assets/image-intership-1.png"></v-img>
      </v-col>
      <v-col cols="12" md="5">
        <div class="d-block justify-left mt-16 mr-10 responsivo-texto">
          <h2 class="text-center">O que é estágio?</h2>
          <p class="desc">
            O estágio é uma forma de aprendizado prático e experiência profissional, geralmente realizado por estudantes como parte de seu currículo educacional. Durante o estágio, os estudantes têm a oportunidade de aplicar os conhecimentos teóricos adquiridos em sala de aula em ambientes de
            trabalho reais, desenvolvendo habilidades práticas e ganhando uma compreensão mais profunda do campo de estudo ou da profissão escolhida. Os estágios podem ser conduzidos em empresas, instituições de ensino, laboratórios de pesquisa ou organizações governamentais, proporcionando aos
            estudantes uma visão prática do funcionamento do mundo profissional. Essa experiência prática muitas vezes é crucial para a transição suave dos estudantes do ambiente acadêmico para o mercado de trabalho.
          </p>
        </div>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="5">
        <div class="mt-16 ml-16 pa-1 responsivo-texto">
          <h2 class="text-center">Como funciona?</h2>
          <p class="desc">
            Nas EEEPs do Ceará, os estágios têm uma abordagem abrangente, integrando teoria à prática. A colaboração com empresas locais é destacada, proporcionando oportunidades práticas alinhadas às demandas do mercado. O acompanhamento pedagógico, a possível integração a projetos e a avaliação
            contínua evidenciam o compromisso com o desenvolvimento holístico dos estudantes. Além das competências técnicas, há ênfase no desenvolvimento de habilidades socioemocionais. O objetivo final é formar profissionais preparados para contribuir de forma significativa em suas áreas. Se tiver
            mais perguntas ou algo específico em mente, estou à disposição!
          </p>
        </div>
      </v-col>
      <v-col cols="12" md="7">
        <v-row justify="center" align="center" class="responsivo-img-row">
          <v-col v-for="k in 1" :key="k" cols="10">
            <v-sheet class="mt-16">
              <v-img max-height="100%" max-width="100%" src="../assets/image-intership-2.png"></v-img>
            </v-sheet>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12">
        <div class="d-flex justify-center mt-16">
          <v-text-tile>
            <v-title class="text-h6 text-md-h5 text-lg-h4 font-weight-bold">EXPERIÊNCIA PROFISSIONAL É AQUI!</v-title>
          </v-text-tile>
        </div>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="6">
        <div class="text-center mt-16 mb-16">
          <v-btn x-large rounded width="50%" class="text-button" style="background: #18a830; color: #fff"> Matricule-se </v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
    name: 'InternshipView',

    data: () => ({
      //
  }),
}
</script>

<style scoped>
.desc {
  font-size: 20px;
}

.image {
  margin: auto;
}

@media screen and (max-width: 800px) {
  .responsivo-img-row {
    justify-content: center !important;
  }
  .responsivo-texto {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }
}
</style>