import { registerAs } from "@nestjs/config";

export default registerAs('webhookConfig', () => ({
    foo: 'bar',
})
)