const prescriptionReasonSchema = require("./schemas");
const prescriptionReasonService = require("./service");

module.exports = (fastify, options, next) => {
  fastify.post(
    "/prescription-reason",
    { schema: prescriptionReasonSchema.createPrescriptionReason },
    prescriptionReasonService.createPrescriptionReason
  );
  fastify.delete(
    "/prescription-reason/:id",
    { schema: prescriptionReasonSchema.deletePrescriptionReason },
    prescriptionReasonService.deletePrescriptionReason
  );
  fastify.patch(
    "/prescription-reason/:id",
    { schema: prescriptionReasonSchema.patchPrescriptionReason },
    prescriptionReasonService.patchPrescriptionReason
  );
  fastify.get(
    "/prescription-reason",
    { schema: prescriptionReasonSchema.getPrescriptionReasonWithFilter },
    prescriptionReasonService.getPrescriptionReasonWithFilter
  );
  fastify.get(
    "/prescription-reason/list",
    { schema: prescriptionReasonSchema.getPrescriptionReasonList },
    prescriptionReasonService.getPrescriptionReasonList
  );
  fastify.get(
    "/prescription-reason/:patientId/by-prescribable",
    { schema: prescriptionReasonSchema.getPrescriptionReasonByPrescribable },
    prescriptionReasonService.getPrescribablesAggregatedByReason
  );
  fastify.get(
    "/prescription-reason/:patientId/by-patient",
    { schema: prescriptionReasonSchema.getPrescriptionReasonCount },
    prescriptionReasonService.getPrescriptionReasonCount
  );
  next();
};
