import { shallowMount, VueWrapper } from "@vue/test-utils";
import Navigation from "@/views/Navigation.vue";

const propsData = {
  currentStep: 1,
  title: "monsterparty",
};

let wrapper: VueWrapper<any>; // eslint-disable-line

describe("Navigation", () => {
  beforeEach(() => (wrapper = shallowMount(Navigation, { propsData })));

  it("should hide Zurück button when current step is 1", () => {
    const backButton = wrapper.find('[data-test-id="btn-back"]');
    expect(backButton.exists()).toBeFalsy();
  });

  it('should render "monsterparty" title  when current step is 1', async () => {
    expect(wrapper.text()).toContain("monsterparty");
  });

  it("should display Zurück button when current step is different than 1", async () => {
    await wrapper.setProps({ currentStep: 2 });
    const backButton = wrapper.find('[data-test-id="btn-back"]');
    expect(backButton.exists()).toBeTruthy();
  });

  it('should render "adriano" title  when current step is 2', async () => {
    await wrapper.setProps({ currentStep: 2, title: "adriano" });
    expect(wrapper.text()).toContain("adriano");
  });

  it('should render "Zurück" text for Zurück button when current step is different than 1', async () => {
    await wrapper.setProps({ currentStep: 3 });
    const backButton = wrapper.find('[data-test-id="btn-back"]');
    expect(backButton.text()).toBe("Zurück");
  });

  it('should render "Der Perfekte Moment" title  when current step is 3', async () => {
    await wrapper.setProps({ currentStep: 3, title: "Der Perfekte Moment" });
    expect(wrapper.text()).toContain("Der Perfekte Moment");
  });

  it('should render "Weiter" text for Weiter button when current step is not 4', async () => {
    await wrapper.setProps({ currentStep: 3 });
    const nextButton = wrapper.find('[data-test-id="btn-next"]');
    expect(nextButton.text()).toBe("Weiter");
  });

  it("should hide Weiter button when current step is 4", async () => {
    await wrapper.setProps({ currentStep: 4 });
    const nextButton = wrapper.find('[data-test-id="btn-next"]');
    expect(nextButton.exists()).toBeFalsy();
  });
});
