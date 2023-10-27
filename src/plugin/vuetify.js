import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import {
    VDataTable,
    VDataTableServer,
    VDataTableVirtual,
  } from "vuetify/labs/VDataTable";
  
export default createVuetify({
    components: {
      VDataTable,
      VDataTableServer,
      VDataTableVirtual,
    },
  })